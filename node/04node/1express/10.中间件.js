let express =require('express')

let app =express();

app.use((req,res,next)=>{
    console.log(req.url)
    console.log(req.method)
    next();
})
app.get('/',(req,res)=>{
    res.send('首页');
})

app.get('/user',(req,res)=>{
    res.send('用户管理');
})
app.post('/user',(req,res)=>{
    res.send('用户管理post');
})
app.listen(8080,function () {
    console.log('服务已经启动')
})