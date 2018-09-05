/*
	封装：
*/
class Person{
	private String name;
	private int age;

	public void setName(String name){
		this.name=name;
		System.out.println("this===="+this);
	}
	public void setAge(int age){
		this.age=age;
	}
	public void speak(){
		System.out.println(name+"11111"+age);
	}

}	
class ThisDemo{
	public static void main(String[] args){
		Person p=new Person();
		p.setName("张三");
		p.setAge(15);
		p.speak();
		System.out.println("p===="+p);

		Person p2=new Person();
		p2.setName("张三33");
		p2.setAge(1533);
		p2.speak();
		System.out.println("p2===="+p2);
	}
}		