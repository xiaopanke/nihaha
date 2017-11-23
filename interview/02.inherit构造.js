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

//2构造继承  使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类
function Cat(name){
    Animal.call(this);
    this.name=name || 'tom'
}

var cat =new Cat();
console.group('%c%s', 'color:green', cat.name)
//console.group('%c%s', 'color:red', cat.eat('鱼'))
console.group('%c%s', 'color:yellow', cat.coding())
console.group('%c%s', 'color:blue',cat instanceof Animal);
console.group('%c%s', 'color:blue',cat instanceof Cat);
/*
特点：

解决了1中，子类实例共享父类引用属性的问题
创建子类实例时，可以向父类传递参数
可以实现多继承（call多个父类对象）

缺点：

实例并不是父类的实例，只是子类的实例
只能继承父类的实例属性和方法，不能继承原型属性/方法
无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
*/