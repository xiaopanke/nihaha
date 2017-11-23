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

//1原型链继承  将父类的原型做为子类的原型
function Cat(){

}
Cat.prototype=new Animal();
Cat.prototype.name='cat';

var cat =new Cat();
console.group('%c%s', 'color:green', cat.name)
console.group('%c%s', 'color:red', cat.eat('鱼'))
console.group('%c%s', 'color:yellow', cat.coding())
console.group('%c%s', 'color:blue',cat instanceof Animal);
console.group('%c%s', 'color:blue',cat instanceof Cat);
/*
特点：

非常纯粹的继承关系，实例是子类的实例，也是父类的实例
父类新增原型方法/原型属性，子类都能访问到
简单，易于实现
缺点：

要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
无法实现多继承
来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）
创建子类实例时，无法向父类构造函数传参
推荐指数：★★（3、4两大致命缺陷）
*/