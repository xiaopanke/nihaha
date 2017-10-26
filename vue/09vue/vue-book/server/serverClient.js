let http=require('http');
let url=require('url');
let sliders=require('./db/sliders.js');
let fs=require('fs');


function getbook(cd) {
    fs.readFile('./db/book.json','utf8',(err,data)=>{
        if(err || data.length==0){
            cd([])
        }else{
            cd(JSON.parse(data))
        }
    })
}
function writebook(data,cb) {
    fs.writeFile('./db/book.json',JSON.stringify(data),cb)
}
http.createServer((req,res)=>{
  console.log('来一个接口')
      let {pathname,query}=url.parse(req.url,true)
      let id=parseInt(query.id);
      if(pathname === '/api/sliders'){
          res.end(JSON.stringify(sliders))
      }else if(pathname==='/api/hot'){
          getbook((data)=>{
              res.end(JSON.stringify(data.reverse().slice(0,12)))
          })
      }else if(pathname==='/api/book'){
          switch (req.method){//GET　POST DELETE PUT
              case 'GET':
                if(id){//查询某一个
                  getbook((data)=>{
                      let book=data.find(item=>(item.id===id))
                      let result={book};
                      if(book){
                        result.err=0
                      }else{
                        result.err=1
                      }
                     res.end(JSON.stringify(result))
                  })
                }else{//查询所有
                  getbook((data)=>{
                    res.end(JSON.stringify(data.reverse()))
                  })
                }
              break;
              case 'POST':
                  let str=''
                  req.on('data',(chunk)=>{//接收从前端传过来的数据
                      str+=chunk
                  })
                  req.on('end',()=>{//接收完毕
                      let book =JSON.parse(str)

                      getbook((books)=>{
                        book.id=books.length===0 ? 1 : books[books.length-1].id+1
                        books.push(book)//将获取的书和原有的拼在一起
                        writebook(books,()=>{//将书写入到json中，成功后返回添加后的那一项
                          res.end(JSON.stringify(book))
                        })
                      })
                  })
              break;
              case 'DELETE':
                  if(isNaN(id)){
                    console.log(1234)
                    getbook((books)=>{
                      writebook([],()=>{
                        res.end(JSON.stringify([]))
                      })
                    })

                  }else{
                    getbook((books)=>{
                      books=books.filter(item=>item.id!==id)
                      writebook(books,()=>{
                        res.end(JSON.stringify([]))
                      })
                    })
                  }
              break;
              case 'PUT':
                  let str2='';
                  req.on('data',(chunk)=>{
                     str2+=chunk
                  })
                  req.on('end',()=>{
                      let book=JSON.parse(str2)
                      getbook((books)=>{
                          books=books.map(item=>{
                              if(item.id==id){
                                  return book
                              }
                              return item;
                          })
                          writebook(books,()=>{
                            //res.end(JSON.stringify(book))
                            res.end(JSON.stringify({'msg':'ok'}))
                          })
                      })
                  })
              break;
          }
      }
}).listen(3000)
//npm install -g nodemon
//nodemon 文件名
