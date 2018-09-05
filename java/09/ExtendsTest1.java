/*
	学生类和老师类
		共性


		private 私有 学生类和老师类不能直接访问name和age变量 了
*/
class Person{
	private String name;
	private int age;
	public void setName(String name){this.name=name;}
	public void setAge(int age){this.age=age;}
	public String getName(){return this.name;}
	public int getAge(){return this.age;}
}
class Teacher extends Person{
	public void teacher(){
		System.out.println(getName()+getAge());
	}
}
class Student extends Person{
	public void study(){
		System.out.println(getName()+getAge());
	}
}
class ExtendsTest1{
	public static void main(String[] args){
		Teacher t=new Teacher();
		Student s=new Student();
		t.setName("张三");
		t.setAge(13);
		t.teacher();
		s.setName("李四");
		s.setAge(121);
		s.study();
	}
}