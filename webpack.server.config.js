const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

config = merge.smart(common, {
  mode: 'development',
  target: 'node',  //用于node环境
  entry: path.join(__dirname, 'client/serverApp.js'),
  output: {
    libraryTarget: 'commonjs2', //!!!!!!!千万不能少
    path: path.join(__dirname, './dist'),
    filename: 'serverApp.js',
    publicPath: '/static/'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env', "@babel/preset-react"],
      //       plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-class-properties']
      //     }
      //   }
      // },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader', 'css-loader',
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
)

// console.log(config.module.rules[2])
module.exports = config
