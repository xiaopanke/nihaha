var express=require('express')
//构建一个express实例
var app=express();
//处理get 请求
app.get('/index',(req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('首页')
})

app.get('/home',(req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('首页2')
})
app.get('*',(req,res)=>{
    res.end('404')
})
app.listen(8080)