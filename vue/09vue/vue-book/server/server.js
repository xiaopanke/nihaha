let http =require('http')
/*
* 4444-》3000跨域
* 协议 主机名 端口 一个不一致都会导致跨域问题
* cors  服务端配置允许前端跨域
* jsonp服务端放回一个方法执行
*iframe跨域 postMessage
* window.name
* nginx
* wepack实现跨域，上线后配置失效
* */
let url=require('url');
http.createServer((req,res)=>{
  console.log(req.url)
  let {pathname,query}=url.parse(req.url,true)
  if(pathname==='/jsonp'){
      let school={'name':'lipanke'}
      //res.end(`${query.a}(${JSON.stringify(school)})`)

      let cb=query.callback

      res.end(cb+'('+JSON.stringify(school)+')')
  }
}).listen(3000)
