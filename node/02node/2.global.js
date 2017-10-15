/**
 * Created by Administrator on 2017/10/15.
 */
//在文件内直接访问this ,this不是global （文件执行时外层有一个你看不到的闭包，node天生自带，在闭包中this指向被重新更改了）
//console.log(global)
//process 进程
//Buffer 缓存区
//clearImmediate
//clearInterval
//clearTimeout
//console
//console.log(this)
/*(function() {
    console.log(this);
})();*/
//console.log(process.pid)//可以在任务管理器中看一
//process.kill('pid') 杀掉进程

/*console.time('for')
for(var i=0;i<100007777979;i++){}
console.timeEnd('for')
*/

/*
在哪个窗口下配置的就在哪里使用
* 配置环境变量 开发和上线使用
* window 系统的是   set NODE_ENV=dev
* mac 系统的是   export NODE_ENV=dev
* */

setImmediate(function () {
    console.log('第二个小本上立刻执行');
})

setTimeout(function () {
    console.log('第二个小本上立刻执行');
})


//在同步代码执行后再执行
process.nextTick(function () {
    console.log('当前队列的底部');
})

let url='';
if(process.env.NODE_ENV=='dev')
{
    url='http://localhost:8080'
}else{
    url='http://www.zhufengzp.cn'
}

console.log(url)


//顺序： 同步>nextTick>setImmediate>setTimeout

//timeout箭头函数中没有this指向，没有raguments
setTimeout(function (eat,food) {
    //console.log(eat,food,this)
    console.log(this)
},0,'水果','食物')

