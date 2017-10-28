/*
* 获取请求参数
* 请求行：  GET  /user  HTTP/1.1  请求方法名 请求路径 协议/版本号
* 请求头ContentType text/html;charset=utf8
* 请求体
* */
let express =require('express')

let app =express();
//http://localhost:8080/signup?name=panke&age=17
app.get('/signup',(req,res)=>{
    //获取请求的方法名  跟原生一样
    console.log(req.url)///signup?name=panke&age=17
    console.log(req.method)//完整url路径，包括路径名(pathname) +查询字符串(query)
    console.log(req.path) //signup
    console.log(req.query) //{name:'panke',age:17}
    console.log(req.headers) //请求头对象
    console.log(req)
    //相对于setHeader
    res.header('Content-Type','text/html;charset-utf8')
    res.end(`<form action="/signup" method="post">
    用户名 <input type="text" name="name">
    密码 <input type="text" name="password">
    <input type="submit">
</form>`)



})
//req是可读流
app.post('/signup',(req,res)=>{
    var result=''
    req.on('data',(chunk)=>{
        result+=chunk
    })
    console.log(123);
    req.on('end',()=>{
        res.end(result)
    })
})
app.listen(8080,function () {
    console.log('服务已经启动')
})