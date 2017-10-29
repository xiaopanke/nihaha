let express =require('express')
let cookieParser=require('cookie-parser')//这个中间件能获取请求头中的cookie字段，并且把它转成一个对象，然后赋给red.cookies

/*
* res.cookie方法是由express提供的
* req.cookies是由cookieParser提供的
* */
let app =express();
app.use(cookieParser())
app.get('/write',(req,res)=>{
    //1.不指定任何参数
    //res.cookie('name','panke2')
    //2.指定域名，指定这个cookie归谁所有，当向哪个域名发请求的时候才会带上此cookie
    //配置hosts文件
    /*res.cookie('name','panke',{
        domain:'a.panke.cn'
    })*/
    /*
    * Path 指定路径
    * 如果指定了cookie的路径，那么 只有当客户端再次再服务器发送，指定路径的请求时才会发送cookie，其它路径不发放
    * */
   //res.cookie('name','panke3',{path:'/read1'})
   /* res.cookie('name','panke2',{
        expires:new Date(Date.now()+10000) //过期时间
    })*/
    /*res.cookie('name','panke2',{
        maxAge:10000//最长存活时间  10秒后过期
    })*/
    res.cookie('name','panke2',{
        httpOnly:true //如果设置了httpOnly的参数之后 ，就表示js再也无法读取cookie了
    })
    res.send('ok')
})
app.get('/read',(req,res)=>{
    res.json(req.cookies)
})
app.get('/read1',(req,res)=>{
    res.json(req.cookies)
})
app.get('/visit',(req,res)=>{
    let num=req.cookies.num || 0;
    num++
    res.cookie('num',num)
    //res.json('欢迎第'+num+'个访问')
    res.json(`欢迎第${num}次访问`)
})
app.get('/clear',(req,res)=>{
    res.clearCookie('num')
    res.send(`重置访问次数`)
})
app.listen(8080,function () {
    console.log('服务已经启动')
})