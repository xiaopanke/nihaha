var express=require('express')
//构建一个express实例
var app=express();

app.use((req,res,next)=>{//表示使用一个中间函数 next 是一个由express提供的函数 继续
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    console.log('use')
    next();//如果调用表示继续执行下面的路由
})
//处理get 请求
app.get('/index',(req,res)=>{
    res.end('首页')
})

app.get('/home',(req,res)=>{
    res.end('首页2')
})
app.get('*',(req,res)=>{
    res.end('404')
})
app.listen(8080)