/*
	final 类 -- 最终类，没有子类，不能被继承
		被final修饰的类有2个，String Math 太监类
	final 方法
		被final修饰的方法，不能被子类重写

	保证安全性
	
	关于final修饰静态成员成员变量的做法，标准格式	 全部大写
	实际开发，修饰局部变量，静态成员变量，修饰类
*/
final class Person{ //错误: 无法从最终Person进行继承

}
class Person2{
	public static final int X=10; 
	public final void show(){

	}
}
class Teacher extends Person2{
	public void show(){ //错误: Teacher中的show()无法覆盖Person2中的show()
		
	}
}
class FinalDome2{
	public static void main(String[] args){
		System.out.println(1);
	}
}