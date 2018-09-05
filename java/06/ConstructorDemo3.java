/*
	冗余 代码太多啦

*/

class Person{
	private String name;
	private int age;
	//利用构造方法，在创建对象的时候，对成员赋值
	Person(String name,int age){
		this.name=name;
		this.age=age;
	}
	Person(){ //对构造方法进行重载
		// this.name="张三";
		// this.age=18;
		this("张三",18);
	}
	Person(String name){
		// this.name=name;
		// this.age=17;
		this(name,17);
	}
	Person(int age){
		// this.name="王五";
		// this.age=age;
		this("王五",age);
	}
	public void speak(){
		System.out.println(this.name+"。。。。。。"+this.age);
	}
}
class ConstructorDemo3{
	public static void main(String[] args){
		Person p=new Person("张三",20);
		p.speak();

		Person p2=new Person();
		p2.speak();

		Person p3=new Person("王五");
		p3.speak();

		Person p4=new Person(80);
		p4.speak();
	}
}