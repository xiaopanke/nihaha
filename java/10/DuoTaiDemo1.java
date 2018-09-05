/*
务必要记住
	多态中，子类父类成员使用的细节
	
细节：
	非静态成员变量:编译时期看父类引用中有没有变量，如果有编译成功，没有就编译失败
		运行时候，运行的是父类中的变量
			
	静态成员变量：编译时期看父类引用中有没有变量，如果有编译成功，没有就编译失败
		运行时候，运行的是父类中的变量

	非静态成员方法：编译时期看父类引用中有没有方法，如果有编译成功，没有就编译失败
		运行时候，运行的是子类中重写的方法 ******

	静态成员方法：编译时期看父类引用中有没有方法，如果有编译成功，没有就编译失败
		运行时候，运行的是父类中的静态方法 ******	

	Fu f=new Zi(); //除了非静态的成员方法以外，编译运行都看左边
	只有非静态成员方法，编译看左边，运行看右边
		
*/

class Fu{
	 int x=1;
	 static public void show(){
	 	System.out.println("父类方法show");
	 }
}
class Zi extends Fu{
	 int x=2;
	 static public void show(){
	 	System.out.println("子类方法show");
	 }
}
class DuoTaiDemo1{
	public static void main(String[] args){
		Fu f=new Zi();
		f.show();
		System.out.println(f.x);
	}
}