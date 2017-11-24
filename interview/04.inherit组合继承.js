//面试总结：继承 
//首先得有一个父类,在这里定义一个动物类
function Animal(name){
    this.name=name || 'animal'; //属性
    this.coding=function(){ //定义实例方法
        console.log(this.name+'正在写代码')
    }
}
//定义原型方法
Animal.prototype.eat=function(food){
    console.log(this.name+'正在吃' + food)
}

//4组合继承  1.通过调用父类构造函数 ,继承父类的忏悔并保存传参的优点  2.通过父类实例作为子类原型，实现函数复用
function Cat(name){
    Animal.call(this);
    this.name=name|| 'tom'
}
Cat.prototype=new Animal();

var cat =new Cat();
console.group('%c%s', 'color:green', cat.name)
console.group('%c%s', 'color:red', cat.eat('鱼'))
console.group('%c%s', 'color:yellow', cat.coding())
console.group('%c%s', 'color:blue',cat instanceof Animal);
console.group('%c%s', 'color:blue',cat instanceof Cat);
/*
特点：

不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
缺点：

实例是父类的实例，不是子类的实例
不支持多继承
*/