let fs=require('fs')
function read(url) { //Promise有then方法，所以返回一个Promise
    return new Promise((resolve,reject)=>{
            fs.readFile(url,'utf8',(err,data)=>{
            if(err) return console.log(err)
            resolve(data)
        })
    })
}

Promise.all([read('1.txt'),read('2.txt')])
    .then(([name,age])=>{
        console.log(name,age)
},(err)=>{
    console.log(err)
})
Promise.all([read('1.txt'),read('2.txt')]).then((data)=>{
    console.log(dat)
},(err)=>{
    console.log(err)
})