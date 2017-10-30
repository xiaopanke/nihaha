let express =require('express')
let index=require('./routes/index')
let user=require('./routes/user')
let session=require('express-session')
let path=require('path')
let bodyParser=require('body-parser')//用来解析请求体的，把请求体的数据变成对象，赋给req.body
let app =express();

//设置模板引擎
app.set('view engine','html')
//设置模板的存放根目录
app.set('views',path.resolve('views'))
//设置模板的渲染方法
app.engine('html',require('ejs').__express)

//服务器是通过请求头中content-Type字段来得到请求的格式
//客户端传过来的请求体格式：查询字符串格式 username=1&password=2;
app.use(bodyParser.urlencoded({extended:true}))
//也有是JSON的格式 JSON.parse();
app.use(bodyParser.json())

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'panke' //加密cookie的密钥，让别人识别不出来我写的是什么

}))

//当请求路径以/开头，走Index中间件
//当请求路径以/user开头，走user中间件
app.use('/',index)
app.use('/user',user)

app.listen(8080,function () {
    console.log('服务已经启动')
})