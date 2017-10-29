let express =require('express')
let fs=require('fs');

let app =express();

app.use((req,res,next)=>{
    console.log('中间件1')
    res.header('Content-Type','text/html;charset=utf8')
    //因为土壤污染代码中可能会有异步逻辑，不能认为代码执行结束整个任务就结束 了
    //所以需要调用next方法来表示任务执行结束
    //setTimeout(()=>{next()},3000)
    //读取一个文件的内容，并把读到的结果赋给req.msg
    fs.readFile('1.txt','utf8',(err,data)=>{
        //如果在中间件里出错的话，应该交给统一的处理函数来处理
        if(err){
            //同样调用next继续执行，但是会传入错误对象
            //如果next的参数不为null就表示 有错误了，两颗会跳过正常的业务逻辑，交由错误处理中间件来处理
            next(err)
        }else{
            req.msg=data;
            next();
        }
    })
})
app.use((req,res,next)=>{
    console.log('中间件2')
    res.header('Content-Type','text/html;charset=utf8')
    next()
})

app.get('/',(req,res)=>{

    res.end('首页')
})

app.get('/user',(req,res)=>{
    res.end('用户管理')
})
//错误处理中间件多了一个参数 ，err
app.use((err,req,res,next)=>{
    console.error(err);
})
app.listen(8080,function () {
    console.log('服务已经启动')
})