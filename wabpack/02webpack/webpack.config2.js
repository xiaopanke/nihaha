const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = [{
  output: {
    filename: './dist/dist-amd.js',
    libraryTarget: 'amd'
  },
  entry: './entry/file.js',
}, {
  output: {
    filename: './dist/dist-commonjs.js',
    libraryTarget: 'commonjs'
  },
  entry: './entry/file.js',
}]
