/*当客户端第一访问服务器的时候，服务器向客户端种值一个cookie
通过响应头：Set-Cookie  name=panke
* */
let http=require('http')
let server=http.createServer((req,res)=>{
    let url=req.url;
    //表示服务器向客户端写入cookie
    if(url=='/write'){
        res.setHeader('Set-Cookie','name=panke')
        res.end('write ok')
    }else if(url=='/read'){
        //当再次访问服务器的时候，服务器会把保存的cookie带上，通过请求中的'Cookie'字段发回给服务器，服务器可以接收并读取
        console.log(req)
        let cookie=req.headers.cookie
        res.end(cookie);
    }else{
        res.end('404')
    }
}).listen(8080)
