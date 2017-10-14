/**
 * Created by Administrator on 2017/9/29.
 */
function Foo() {  //类
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {//类的自己的私有属性 getName
    console.log(2);
};
Foo.prototype.getName = function () {//类的原型上有一个属性getName
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}

Foo.getName(); //2
getName(); //4 ?
Foo().getName();//1
getName();//1
new Foo.getName(); //先获取Foo.getName 这个函数，new 这个函数(),把这个函数执行个函数的实例 2
new Foo().getName();//3 new Foo()先创建Foo实例
new new Foo().getName();//3