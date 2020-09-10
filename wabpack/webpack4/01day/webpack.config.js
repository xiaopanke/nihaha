console.log(12345)

/*
__dirname:指的是当前该文件webpack.config.js 所在的目录
*/
const path=require('path');
console.log('__dirname='+__dirname);
module.exports={
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[{
      test:/\.png$/,
      use:{
        loader:'file-loader',
        options:{
          name:'[name]_[hash].[ext]',
          outputPath:'image/'
        }
      }
    }]
  }
}
