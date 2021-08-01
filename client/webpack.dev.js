// const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 3000
  }
})
