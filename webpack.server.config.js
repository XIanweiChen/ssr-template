const path = require('path');


module.exports = {
    mode: 'development',
    target:'node',
    entry:path.join(__dirname,'src/App.js'),
    entry:path.join(__dirname,'src/serverApp.js'),
    output:{
        libraryTarget:'commonjs2',
        filename:'serverApp.js',
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
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    'css-loader',
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


}
