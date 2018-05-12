const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.js')

// hot-reload related
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['webpack-hot-middleware/client?noInfo=true&reload=true'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  plugins: [
    // webpack-hot-middleware 配置需要
    new webpack.HotModuleReplacementPlugin()
  ]
})