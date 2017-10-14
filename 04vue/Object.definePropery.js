/**
 * Created by Administrator on 2017/10/12.
 */
//https://segmentfault.com/a/1190000007434923
var obj = {
    test:"hello"
}
//对象已有的属性添加特性描述
Object.defineProperty(obj,"test",{
    configurable:true | false,
    enumerable:true | false, //是否可以被枚举（列举）
    value:'12313',
    writable:true | false  //是否可以被重写
});
//对象新添加的属性的特性描述
Object.defineProperty(obj,"newKey",{
    configurable:true | false,
    enumerable:true | false,
    value:'123123213213',
    writable:true | false
});
console.log(obj)

/*
* Configurable: 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性。
 Enumerable： 表示能否通过for-in循环返回属性。
 Writable： 表示能否修改属性的值
 Value： 包含这个属性的数据值
* */