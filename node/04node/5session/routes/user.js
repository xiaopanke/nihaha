let express =require('express')

let router=express.Router()

let users=[]

router.get('/signup',(req,res)=>{
    /*此路径是相对于模板根目录的子路径，后缀可以省略*/
    //读取写入的消息，然后通过模板渲染显示在页面上
    let error=req.session.error
    req.session.error=null;
    res.render('signup',{title:'用户注册',error})
})

router.post('/signup',(req,res)=>{
    let user=req.body;
    let exists=users.some(item=>item.username=user.username)
    console.log(users)
    if(exists){
        //从哪来到哪去，回到上个页面去
        req.session.error='用户名已经被占用'
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
        req.session.username=user.username
        res.redirect('/')
    }else{
        req.session.error='用户名或密码错误'
        res.redirect('back')
    }
})

router.get('/signout',(req,res)=>{
    req.session.username=null;
    res.redirect('/')
})

router.get('/private',(req,res)=>{

})

module.exports=router