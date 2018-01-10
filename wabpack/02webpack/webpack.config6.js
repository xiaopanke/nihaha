var path = require('path');
module.exports={
  entry:{
    'haha':'./entry/file.js'
  },
  output:{
    path:path.resolve(__dirname,'asset'),
    filename:'[name].js'
  }
}
