/*
	java中的继承特点
	class Demo1 extends Demo{}	
	class Demo2 extends Demo{}	
	单继承，一个类只能同时继承一个父类，不能同时继承多个类
	一个父类，可以有多个子类

*/

class Sun extends Zi{
	
}
class Fu{
	public void show(){
		System.out.println("fu---show");
	}
}	
class Zi extends Fu{
	public void find(){
		System.out.println("zi---show");
	}
}

class ExtendsDemo1{
	public static void main(String[] args){
		new Sun().show();
		new Sun().find();
	}
}