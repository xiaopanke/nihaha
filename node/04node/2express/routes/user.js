let express =require('express')

let router=express.Router()
let users=[]

router.get('/signup',(req,res)=>{
    /*此路径是相对于模板根目录的子路径，*/
    res.render('signup',{title:'用户注册'})
})

router.post('/signup',(req,res)=>{
    let user=req.body;
    let exists=users.some(item=>item.username=user.username)
    console.log(exists)
    console.log(users)
    if(exists){
        //从哪来到哪去，回到上个页面去
        res.redirect('back')
    }else{
        users.push(user);
        res.redirect('/user/signin')
    }
})
router.get('/signin',(req,res)=>{
    res.render('signin',{title:'用户登陆'})
})
router.post('/signin',(req,res)=>{
    let user=req.body;
    let exist=users.some(item=> (item.username==user.username && item.password==user.password))
    if(exist){
        res.redirect('/')
    }else{
        res.redirect('back')
    }
})

module.exports=router