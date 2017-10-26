//file stystem 内置模块核心模块
let fs=require('fs')
//i/o操作，在node能用异步就不要同步
//1.使用readFile读取的内容必须要存在
//默认读取的是buffer类型
//同步会导致阻塞主线程
/*
    let name=fs.readFileSync('1.txt','utf8')
    let age=fs.readFileSync('2.txt','utf8')
    console.log({name,age})
*/


//同步 异步的结果
//回调套回调 promise  可以解决回调地狱
//promise 1.可以同步 异步的结果 2.可以解决回调地狱
let school={}
fs.readFile('1.txt','utf8',function (err,name) {
    //err-first
    if(err)return console.log(err)
    school.name=name
    out()
})
fs.readFile('2.txt','utf8',function (err,age) {
    if(err)return console.log(err)
    school.age=age
    out()
})

function out() {
    if(school.name&&school.age)
    console.log(school)
}