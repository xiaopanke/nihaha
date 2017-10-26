let http=require('http')
let fs=require('fs')
//http模块是一个内置模块
let mine={
    '.css':'text/css',
    '.js':'application/javascript',
    '.html':'text/html'
}
let server=http.createServer((req,res)=>{
    let pathname=req.url
    if(pathname==='/'){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        fs.createReadStream('index.html').pipe(res)
    }else{
        if(fs.existsSync('.'+pathname)){
            res.setHeader('Content-Type',mine[pathname.match(/\.\w+$/)[0]]+';charset=utf-8');
            fs.createReadStream('.'+pathname).pipe(res)
        }else{
            res.statusCode=404;
            res.end('not found')
        }
    }
})
let port=3000
server.listen(port,()=>{
    console.log(`开启${port}`)
});//127.0.0.1 ==localhost