const path = require('path');


module.exports = {
  mode: 'development',
  target: 'node',  //用于node环境
  entry: path.join(__dirname, 'src/serverApp.js'),
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
