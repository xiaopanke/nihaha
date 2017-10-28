/*根据客户端的不同的请求路径不同的内容
简单好维护，结果清晰
*/
let express =require('express')

let app =express();
/*
app上面也可以调用一些方法，用这个方法来定义路由
在http里GET POST PU DELETE
当客户端浏览器通过GET方法访问服务器/路径的时候，会由对应的监听函数来进行处理
*/
app.get('/',(req,res)=>{
    res.end('home')
})

app.get('/user',(req,res)=>{
    res.end('user')
})
//curl -X POST http://localhost:8080/user  用git bash 或者 cmd
app.post('/user',(req,res)=>{
    res.end('post')
})
app.put('/user',(req,res)=>{
    res.end('put')
})
app.delete('/user',(req,res)=>{
    res.end('delete')
})

app.listen(8080,function () {
    console.log('服务已经启动')
})