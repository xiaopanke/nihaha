/*
	封装：
*/
class Person{
	private String name;
	private int age;


	public void setName(String n){
		name=n;
	}
	public void setAge(int a){
		age=a;
	}
	public String getName(){
		return name;
	}
	public int getAge(){
		return age;
	}
	public void speak(){
		System.out.println(name+"11111"+age);
	}

}	
class EncapsulationDemo1{
	public static void main(String[] args){
		Person p=new Person();
		p.setName("张三");
		p.setAge(15);
		p.speak();


		p.getAge();
		p.getName();
	}
}		