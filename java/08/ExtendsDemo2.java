/*
	 继承后，子类，父类中，成员变量的特点
	super 关键字，用于在子类中，调用父类成员
	super 表示父类的对象引用 
	this跟对象有关系 
	静态跟对象没有关系 ，调用父类的静态成员，加父类名调用 	
*/

class Fu{
	int x=1;
}	
class Zi extends Fu{
	int x=2;
	public void show(){
		int x=3;
		//System.out.println(x);
		System.out.println(super.x);
	}
}

class ExtendsDemo2{
	public static void main(String[] args){
		Zi z=new Zi();
		z.show();
		//System.out.println(z.x);
	}
}