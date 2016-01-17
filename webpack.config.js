var path = require('path'),
  libPath = path.join(__dirname, 'www/app'),
  wwwPath = path.join(__dirname, 'www/public'),
  pkg = require('./package.json'),
  webpack = require("webpack");

module.exports = {
  entry: path.join(libPath, 'app.js'),
  output: {
    path: wwwPath,
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /[\/]angular\.js$/,
        loader: 'expose?angular!exports?window.angular'
      },
      {
        test: /[\/]jquery\.js$/,
        loader: 'expose?jQuery'
      }, {
        test: /[\/]lodash\.js$/,
        loader: 'expose?_'
      }, {
        test: /\.html$/,
        loader: 'html?removeRedundantAttributes=false'
      }, {
        test: /\.json$/,
        loader: "json"
      }, {
        test: /\.(png|jpg|svg|gif|eot|ttf|woff|woff2|otf)$/,
        loader: 'file?name=[path][name].[ext]'
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "ng-annotate?add=true!babel?presets[]=es2015"
      }, {
        test: /\.scss$/,
        loader: "style!css!autoprefixer!sass"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.html'],
    root: [
      libPath,
      path.join(__dirname, 'node_modules')
    ],
    moduleDirectories: [
      'node_modules'
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
