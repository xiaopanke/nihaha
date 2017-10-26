/*
let fs=require('fs')
function read(url) { //Promise有then方法，所以返回一个Promise
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err) return console.log(err)
            resolve(data)
        })
    })
}
read('1.txt').then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err)
})
*/
Promise.resolve([]).then((data)=>{
    return [...data,1]
}).then((data)=>{
    return [...data,2]
}).then((data)=>{
    console.log(data)
})