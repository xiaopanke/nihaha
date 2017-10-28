//引入express 模块，用来帮助我们创建http 服务器
let express =require('express')

let app=express();

//在本机的8080端口上监听客户端的请求
//请求监听函数，当客户端向服务器发请求时执行的回调函数
app.listen(8080,function () {
    console.log('服务器已经启动，监听8080端口')
})