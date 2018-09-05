/*
	涉及到多态

	转型问题，将Cat强制转换成了Dog，出现ClassCatException

	比较运算符  instanceof 计算结果是布尔类型 也是一个关键字

	a instanceof Cat
*/
class Animal{
	public void eat(){

	}
}
class Cat extends Animal{
	public void eat(){
		System.out.println("猫吃猫粮");
	}
	public void catchMouse(){
		System.out.println("抓老鼠");
	}
}
class Dog extends Animal{
	public void eat(){
		System.out.println("狗吃骨头");
	}
	public void lookHome(){
		System.out.println("看家");
	}
}
class DuoTaiMaoGou{
	public static void main(String[] args){
		
		os(new Dog());
		os(new Cat());
	}
	//参数Animal ，可以接收，所有的子类对象
	//Exception in thread "main" java.lang.ClassCastException: Cat cannot be cast to Dog   
	//ClassCastException类型转换异常
	public static void os(Animal a){
		a.eat();
		System.out.println(a instanceof Cat);
		System.out.println(a instanceof Dog);
		//Dog d=(Dog)a;
		//d.lookHome();
	}



}