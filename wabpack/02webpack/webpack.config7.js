var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
  entry:{
    'haha':'./entry/file.js',
    'xixi':'./entry/file1.js'
  },
  output:{
    path:path.resolve(__dirname,'asset3'),
    filename:'[name].js',
    //publicPath: "https://cdn.example.com/assets/"
    //publicPath: "//cdn.example.com/assets/"
    publicPath:'/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.png$/,
        loader: "url-loader"
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App'
    })
  ]
}
