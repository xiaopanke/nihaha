//文件模块必须以./方式来引用，可以省略.js .json .node ,引用多次只会执行一次，有缓存


let r=require('./sum.js')

//console.log(r.sum(1,2,3,4,5))
//console.log(r(1,2,3,4,5))
console.log(sum(1,2,3,4,5))