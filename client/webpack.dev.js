// const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  // devtool: 'source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    port: 8080
  }
})
