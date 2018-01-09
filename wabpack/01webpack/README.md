## entry 入口文件
## output 出口文件


entry: {
  'haha':'./entry/file.js'
},
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js'
},

[name]相当于上面的haha


entry: {
  'path/of/entry': './entry/file.js',
  'app': './entry/file0.js'
},
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js'
},

key也可以是路径字符串。此时webpack会自动生成路径目录，并将路径的最后作为[name]
