/*
由静态的模板文件+内容=渲染出来的html字符串
* 模板
* */
let express =require('express')
let path =require('path')
let app =express();

//设置模板引擎
//set 用来些变量的值 ，比如说这里的模板引擎
//模块引擎的值和模板的后缀要一样
app.set('view engine','html');

//设置模板存放的根目录
app.set('views',path.resolve('views'))
//指写html类型的模板还是使用ejs模板引擎来进行渲染
app.engine('html',require('ejs').__express)
app.get('/',(req,res)=>{
    //render是用来把静态的模板文件和
    //1. .是指的是模板存放的根目录，而非当前模块所在目录
    //2. 后缀可以不写，找模板的时候会自动添加后缀  .ejs
    res.render('./index.html',{title:'首页',users:[{id:1,name:'lipanke'},{id:2,name:'panke'}],msg:'<h2>123</h2>'})
})

app.listen(8080,function () {
    console.log('服务已经启动')
})


/*
* <%=%>
* */