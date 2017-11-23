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

//3实例继承  为父类实例添加新特性，作为子类实例返回 
function Cat(name){
    var instance =new Animal();
    instance.name=name ||'tom';
    return instance
}

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