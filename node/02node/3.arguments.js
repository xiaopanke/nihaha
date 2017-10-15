//console.log(arguments)//arguments中的属性也叫全局属性，没有持载在global上


//文件模块，自己写的，必须加./来引用
let r=require('./4.dialog.js')

/*//先通过require拿进来的是一个对象，先new 一下，再执行方法
 console.log(r)
 console.log(new r.dialog)
 console.log(new r.dialog())
 new r.dialog().create()

 * let a=new r.dialog;a.create()
* new r.dialog().create()
* 这两个相同
* */

/*new r.dialog().create()
new r.dialog.create()

create 是挂载在原型上，所以得new一下
第一个是对的，先new 一下 ，然后再执行
第二个是不对，它是先执行，后new了一个*/


(function (exports,require,module,__filename,__dirname) {
    

})();