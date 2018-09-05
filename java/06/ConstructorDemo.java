/*
	构造方法：
	作用：建立对象的时候(new 对象的时候)对类中成员变量，初始化赋值

	构造方法定义，必须记住
		1.构造方法的方法名是固定写法，方法名字必须和类的名字完全相同
		2.构造方法是没有返回值的概念，因为不能写返回值类型 （要是写的话就是普通方法了，不是构造方法啦）
		3.没有return
	构造方法特点：
		当你创建对象的时候，构造方法自动运行，不用调用
		构造方法在创建对象的时候运行，只运行一次	
*/

class Person{
	//定义构造方法，方法名字，请你复制类名 
	Person(){
		System.out.println("构造方法");
	}
}
class ConstructorDemo{
	public static void main(String[] args){
		Person p=new Person();
		//System.out.println("123");
	}
}