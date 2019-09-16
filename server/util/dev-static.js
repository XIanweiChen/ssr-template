
const axios = require('axios')
const path = require('path')
const webpack = require('webpack')
const MemoryFs = require('memory-fs')
const ReactDomServer = require('react-dom/server')
const proxy = require('http-proxy-middleware')

const serverConfig = require('../../webpack.server.config')  //获取webpack-serber的配置文件

const getTemplate = () => {   //获取html模版
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/static/index.html')
            .then(res => {
                resolve(res.data)
            })
            .catch(reject)
    })
}

let serverBoundle = null
const Module = module.constructor //获取module的构造函数
const mfs = new MemoryFs     //读取内存中的模块,api和fs相同
const serverCompiler = webpack(serverConfig)   //创建一个webpack,webpack不仅能在cli中用,还能在代码中用
serverCompiler.outputFileSystem = mfs  //把bundle写在内存中
serverCompiler.watch({}, (err, stats) => { //{}表示不加配置,stats是类似你在terminal用webpack输出的那些打包信息
    stats = stats.toJson()
    stats.errors.forEach(err => Console.log(err))
    stats.warnings.forEach(warn => console.log(warn))

    const bundlePath = path.join( //从config中获取bundle的输出路径
        serverConfig.output.path,
        serverConfig.output.filename
    )

    const bundle = mfs.readFileSync(bundlePath,'utf-8') //!!!! utf-8
    const m = new Module()
    
    //为什么要进行一下这一步?
    //bundle是string的代码,不能通过ReactDomServer.renderToString
    //所以要先通过module编译导出才能变成Symbol(react.element)
    m._compile(bundle,'serverApp.js') //!!!!一定要加serverApp.js  把bundle重新编译成一个模块导出
    serverBoundle = m.exports.default
})

module.exports = function (app) {
    //因为静态资源(js,svg等)都在内存中无法设置static,所以只能通过代理的方式获取
    app.use('/static/',proxy({
        target:'http://localhost:3000'
    }))

    app.use(function (req, res) {
        getTemplate().then(template => {
            const content = ReactDomServer.renderToString(serverBoundle)
            const newHtml = template.replace('<!-- app -->', content)   //替换内容
            res.send(newHtml)
        })
    })
}
