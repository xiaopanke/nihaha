let express =require('express')
let session=require('express-session')

let app =express();


app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'panke', //加密cookie的密钥，让别人识别不出来我写的是什么
    cookie:{
        httpOnly:false,
        maxAge:10000 //停止操作10秒后过期
    }
}))
app.get('/write',(req,res)=>{
    req.session.money=1160;
    res.send(`已经存入1160元`)
})
app.get('/read',(req,res)=>{
    res.send(`读到${req.session.money}`);
})

app.get('/visit',(req,res)=>{
    let num=req.session.num || 0;
    num++;
    req.session.num=num;
    res.send(`访问了${num}次啦`)
})

app.listen(8080,function () {
    console.log('服务已经启动')
})