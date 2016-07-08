var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var loadCSS = new ExtractTextPlugin('build/app.css')

module.exports = {
  entry: './js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: loadCSS.extract('style', 'css')
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
      {
        test: /\.gif$|\.jpe?g$|\.woff|\.eot|\.ttf|\.png$|\.svg$/i,
        loader: 'url?limit=10000&name=[name].[ext]',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple Webpack Boiler',
      template: path.resolve(__dirname, './views/index.ejs')
    }),
    new FaviconsWebpackPlugin(path.resolve(__dirname, './assets/favicon.png')),
    loadCSS
  ]
};
