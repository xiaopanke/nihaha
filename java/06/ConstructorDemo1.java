/*
	构造方法：
	作用：建立对象的时候(new 对象的时候)对类中成员变量，初始化赋值

*/

class Person{
	private String name;
	private int age;
	//利用构造方法，在创建对象的时候，对成员赋值
	Person(){
		name="张三";
		age=12;
	}

	public void speak(){
		System.out.println(this.name+"123"+this.age);
	}
}
class ConstructorDemo1{
	public static void main(String[] args){
		Person p=new Person();
		p.speak();
	}
}