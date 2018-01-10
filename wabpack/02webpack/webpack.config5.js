var path = require('path');
module.exports={
  entry:'./entry/file.js',
  output:{
    path:path.resolve(__dirname,'asset'),
    filename:'abc.js'
  }
}
