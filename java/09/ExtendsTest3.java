/*
	涉及到多态
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
class ExtendsTest3{
	public static void main(String[] args){
		/* 
			如果你有很多的宠物，代码量多，重复的还多
			抽取两个方法

		*/
		/*Dog d=new Dog();
		d.eat();
		d.lookHome();
		Dog d1=new Dog();
		d1.eat();
		d1.lookHome();

		Cat c=new Cat();
		c.eat();
		c.catchMouse();
		Cat c2=new Cat();
		c2.eat();
		c2.catchMouse();*/
		/*
		Dog d=new Dog();
		os(d);
		Dog d1=new Dog();
		os(d1);
		Cat c=new Cat();
		os(c);
		Cat c1=new Cat();
		os(c1);
		*/
		os(new Dog());
		os(new Dog());
		os(new Cat());
		os(new Cat());
	}
	//重载
	public static void os(Dog d){
		d.eat();
		d.lookHome();
	}
	public static void os(Cat c){
		c.eat();
		c.catchMouse();
	}



}