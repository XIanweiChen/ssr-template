const express = require('express')
const path = require('path')
const fs = require('fs')
const ReactDOMServer = require('react-dom/server');

const app = express()

const isDev = process.env.NODE_ENV === 'development'
console.log(isDev)
if (!isDev) {
    const content = require('../dist/serverApp.js').default  //引用组件内容
    const template = ReactDOMServer.renderToNodeStream(content)  //react内置函数奖组件转成字符串
    const html = fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8')  //获取html模版
    const newHtml = html.replace('<!-- app -->', template)   //替换内容

    app.use('/static', express.static(path.join(__dirname, '../dist')))

    app.get('/', function (req, res) {
        res.send(newHtml)//返回结果
    })
}else{
    const devStatic = require('./util/dev-static')
    devStatic(app)
}



app.listen(5000,()=>{
    console.log('server listen on 5000')
})