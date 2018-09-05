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
class DuoTaiMaoGou{
	public static void main(String[] args){
		
		os(new Dog());
		os(new Dog());
		os(new Cat());
		os(new Cat());
	}
	//参数Animal ，可以接收，所有的子类对象
	public static void os(Animal a){
		a.eat();
		a.lookHome();
	}



}