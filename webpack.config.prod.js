var webpack = require("webpack");
var extend = require('util')._extend;
var webpackConfig = require('./webpack.config.js');

module.exports = extend(webpackConfig, {
  devtool: false,
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
});
