let http=require('http');
let fs=require('fs');
let url=require('url')

//获取sliders
let sliders=require('./db/sliders')

function readbook(cb) {
    fs.readFile('./db/book.json','utf8',(err,data)=>{
      if(err){
        console.log(err);
        cb([])
      }else{
        cb(JSON.parse(data))
      }
    })
}
function writebook(data,cb) {
  fs.writeFile('./db/book.json',data,cb)
}

http.createServer((req,res)=>{
  let {pathname,query}=url.parse(req.url,true)
  if(pathname=='/api/sliders'){
      res.end(JSON.stringify(sliders))
  }else if(pathname=='/api/hot'){
    readbook((books)=>{
        res.end(JSON.stringify(books.splice(0,6)))
    })
  }else if(pathname=='/api/books'){ console.log(req.method)
      let id=query.id
    switch (req.method){
      case 'GET'://获取
          if(id){ //获取的是一个
              readbook((books)=>{
                  let a=books.find((book)=>(book.id==id))
                  res.end(JSON.stringify(a))
              })
          }else{//获取的是全部
            readbook((books)=>{
              res.end(JSON.stringify(books.reverse()))
            })
          }
        break;
      case 'POST'://添加
          let str=''
          req.on('data',(chunk)=>{
            str+=chunk;
          })
          req.on('end',()=>{
              readbook((books)=>{
                console.log(1)
                console.log(books)
                let book=JSON.parse(str)
                book.id= books.length===0 ? 1 :books[books.length-1].id+1
                books.push(book)
                writebook(JSON.stringify(books),()=>{
                    res.end(JSON.stringify(book))
                })
              })
            })
        break;
      case 'PUT'://修改
        console.log(23456789)
        let str2=''
        req.on('data',(chunk)=>{
          str2+=chunk
        })
        req.on('end',()=>{
            let book=JSON.parse(str2)
            readbook((books)=>{
                books=books.map(item=>{
                    if(item.id==book.id){
                      return book
                    }else{
                      return item;
                    }
                })
                writebook(JSON.stringify(books),()=>{
                  res.end("{a:'ok'}")
                })
            })
        })
        break;
      case 'DELETE'://删除
        readbook((books)=>{
            books=books.filter(item=>item.id!=id)
          console.log(books)
            writebook(JSON.stringify(books),()=>{
              res.end('{a:"okla}"')
            })
        })

        break;
    }
  }

}).listen(3000)
