let  express =require('express')
let router=express.Router()

router.get('/',(req,res)=>{
    //可以接收任意类型的参数，并且可以处理编码问题
    res.send(`
        首页
        <a href="http://localhost:8080/user/signup">注册</a>
        <a href="http://localhost:8080/user/signin">登陆</a>
    `)
})

module.exports=router