let fs=require('fs')
function read(url) { //Promise有then方法，所以返回一个Promise
    return new Promise((resolve,reject)=>{
            fs.readFile(url,'utf8',(err,data)=>{
            if(err) return console.log(err)
            resolve(data)
        })
    })
}
//async await 就基于promise的
async function a() {
    let result=await Promise.all([read('1.txt'),read('2.txt')])
    console.log(result)
}
a();