let http=require('http')
let fs=require('fs')
//http模块是一个内置模块
let server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/'){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        fs.createReadStream('index.html').pipe(res)
    }else if(req.url==='/index.css'){
        res.setHeader('Content-Type','text/css;charset=utf-8')
        fs.createReadStream('index.css').pipe(res)
    }else{
        res.statusCode=404;
        res.end('not found')
    }
})
let port=3000
server.listen(port,()=>{
    console.log(`开启${port}`)
});//127.0.0.1 ==localhost