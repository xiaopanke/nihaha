/*
 * 定义路由中间件，定义文章相关的路由
 * */

let express =require('express')


let router=express.Router()

router.get('/add',(req,res)=>{
    res.send('增加')
})
router.get('/delete',(req,res)=>{
    res.send('删除')
})
 module.exports=router;
