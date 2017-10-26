let http=require('http')
//http模块是一个内置模块
let server=http.createServer((req,res)=>{//监听函数  当浏览器发送请求时会执行此函数
    //req代表的是客户端的请求 是一个可读流  res代表的是服务端的响应 ，是一个可写流
    console.log(req.method)//GET POST PUT DELETE OPTIONS HEADER
    console.log(req.headers)//获取请求的头，请求头中的数据可以通过小写来获取
    console.log(req.url)//请求的路径 默认是/
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('好的，欢迎你');//buffer or string

})
let port=3000
server.listen(port,()=>{
    console.log(`开启${port}`)
});//127.0.0.1 ==localhost