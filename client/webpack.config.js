const HtmlWebpackPlugin = require('html-webpack-plugin')
// const InjectBodyWebpackPlugin = require('inject-body-webpack-plugin').default
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            targets: 'last 2 versions'
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].js'
  },
  plugins: [
    // new InjectBodyWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: '!!html-loader!public/index.html'
      // title: "Let's Get Chopped!"
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css']
  }
}
