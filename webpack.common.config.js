const path = require('path');


module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, './dist'),
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties",
              "react-hot-loader/babel"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", "jsx"],
    alias: {
      "@": path.join(__dirname, "./client")
    }
  }


}
