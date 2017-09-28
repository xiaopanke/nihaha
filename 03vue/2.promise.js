let str=''


//callback 将后续逻辑当作参数传递给异步的方法中，当异步执行后在执行调用
//1.回调地域 （嵌套的问题）
//2.同步异步的结果
function read(callback){
    setTimeout(function(){
        str='212331'
        callback(str)
    },2000)
}

let out=(o)=>{console.log(o)}

read(out)