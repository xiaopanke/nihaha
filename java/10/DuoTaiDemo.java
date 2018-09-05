/*
	多态：
		生活中：同一个人 学生

	多态的前提：
		必须有继承
		方法的重写 
		父类指向自己的子类

	在多态中，方法运行的是子类的重写方法
		

*/

class Animal{
	public void eat(){
		System.out.println("动物吃");
	}
}
class Cat extends Animal{
	public void eat(){
		System.out.println("猫吃狗粮");
	}
}
class Dog extends Animal{
	// public void eat(){
	// 	System.out.println("狗吃狗粮");
	// }
} 
class DuoTaiDemo{
	public static void main(String[] args){
		/*Cat c=new Cat();
		c.eat();*/

		//对象多态性定法 父类引用 =自己子类对象
		Animal a=new Dog();
		a.eat();
	}
}