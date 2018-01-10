const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: './entry/file.js',
        output: {
          filename: '1.js',
          path: path.resolve(__dirname, 'dist')
        }
      })
    }, 5000)
  })
}
