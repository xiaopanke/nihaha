let express =require('express')
let path=require('path');
let app =express();

let users=[{id:1,name:'panke'}]
//send方法可以的类型，字符串 Buffer 对象 数组 数字
app.get('/users',(req,res)=>{
    //发送文件，路径必须是绝对路径或者指定root根目录 
    //res.sendFile(path.resolve('./users.json'))

    res.json(users)
})

app.get('/other',(req,res)=>{
    //res.status(404);
    res.sendStatus(404)
})
app.listen(8080,function () {
    console.log('服务已经启动')
})