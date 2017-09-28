//类 promise  不兼容  兼容方案 es6-promise
//http://blog.fullstackjavascript.cn/post/promise.html


                    //resolve 就是then中的第一个函数
                    //reject 就是then中的第二个函数
/*
let p=new Promise(function (resolve,reject) {
    resolve('world')
    reject('hello')
})

//promise实例上都会有一个then的方法
p.then(function (res) {
    console.log(res)
},function (err) {
    console.log(err)
})
*/


let str=''

function read(){
    return new Promise(function (resolve,reject) {
        setTimeout(function(){
            str='212331'
            resolve(str)
        },2000)
    })
}

read().then(function (data) {
    console.log(data)
},function (err) {
    console.log(err)
})

