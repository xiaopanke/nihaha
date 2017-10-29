/*
路由中间件  这是一个中间件，用来提供路由的功能
把不同类型的路由配置到不同的文件里面去
一个项目有很多的模块user article
* */
let express =require('express')
let user=require('./routes/user')
let article=require('./routes/article')

let app =express();

//当服务器收到客户端面请求的时候，会判断请求路径是不是以/user开关，如果是,会交给user中间件来处理
app.use('/article',article)
app.use('/user',user)


app.listen(8080,function () {
    console.log('服务已经启动')
})
