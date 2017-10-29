/*
* 定义路由中间件，定义用户相关的路由
* */
let express =require('express')
//调用Router方法会返回一个路由对象 就是路由中间件
let router=express.Router();

//路由中间件的用法 和app的很像 mini-app
router.get('/signup',(req,res)=>{
    res.send('注册')
})
router.post('/signup',(req,res)=>{
    res.send('提交注册')
})
router.get('/signin',(req,res)=>{
    res.send('登陆')
})
router.post('/signin',(req,res)=>{
    res.send('提交登陆')
})

module.exports=router