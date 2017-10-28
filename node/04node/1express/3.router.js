let express =require('express')
let fs=require('fs')
let app =express();
app.get('/signup',(req,res)=>{
    fs.readFile('./4.signup.html',(err,data)=>{
    res.end(data)
    })

})
app.post('/signup',(req,res)=>{
    res.setHeader('Content-Type','text/html;charset=utf8');
    res.end('提交注册')
})
app.get('/signin',(req,res)=>{
    res.end('登陆')
})
app.post('/signin',(req,res)=>{
    res.end('提交登陆')
})
//
app.all('*',(req,res)=>{
    res.end('404')
})
app.listen(8080,function () {
    console.log('服务已经启动')
})