const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html'), //源文件
    title: 'index'
})

const isDev =  process.env.NODE_ENV === 'development'

config = {
    mode: 'development',
    plugins: [htmlPlugin,new CleanWebpackPlugin()],
    output:{
        publicPath:'/static/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties',"react-hot-loader/babel"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve:{
        extensions:['.js','jsx'],
        alias:{
            '@':path.join(__dirname,'./src'),
        }
    }

}
if(isDev){
    config.devServer ={
        host:'0.0.0.0',
        port:3000,
        contentBase:path.join(__dirname,'./dist'),
        hot:true,
        overlay:{  //灰屏展示错误信息
            errors:true
        },
        //因为前面加了 publicPath:'/static/'  
        publicPath:'/static/',  //解决找不到main.js
        historyApiFallback:{   //解决找不到index ,类似于404都返回这个页面
            index:'/static/index.html'
        }
    }
}

module.exports = config