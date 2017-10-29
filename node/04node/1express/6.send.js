let express =require('express')

let app =express();
let users=[{id:1,name:'panke'}]


//send方法可以的类型，字符串 Buffer 对象 数组 数字
app.get('/users',(req,res)=>{
    //res.end(JSON.stringify(users))
    res.send(users)
})
app.listen(8080,function () {
    console.log('服务已经启动')
})