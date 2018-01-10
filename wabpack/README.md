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

app.js 与 vendor.js 与 manifest.js的区别
app.js是入口js，vendor则是通过提取公共模块插件来提取的代码块（webpack本身带的模块化代码部分），而manifest则是在vendor的基础上，再抽取出要经常变动的部分，比如关于异步加载js模块部分的内容。
app.js：基本就是你实际编写的那个app.vue(.vue或.js?),没这个页面跑不起来.
vendor的文件大小最大，因为其包含了vue整一个框架的代码，以及webpack的模块化代码
manifest的话，主要是一些异步加载的实现方法（通过建立script方式动态引入js），内容上包含异步js的文件名和路径。

plugin:插件
webpack.optimize.UglifyJsPlugin()  有这个js就压缩了
