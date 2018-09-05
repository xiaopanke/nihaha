/*
	父类私有成员变量，子类不能直接使用，父类中Person类应该有构造方法对成员变量初始化赋值
*/
class Person{
	private String name;
	private int age;
	//父类的构造方法，对成员变量赋值
	Person(String name,int age){
		this.name=name;
		this.age=age;
	}
	public void setName(String name){this.name=name;}
	public void setAge(int age){this.age=age;}
	public String getName(){return this.name;}
	public int getAge(){return this.age;}
}
class Teacher extends Person{
	Teacher(String name,int age){
		super(name,age);
	}
	public void teacher(){
		System.out.println(getName()+getAge());
	}
}
class Student extends Person{
	Student(String name,int age){
		super(name,age);
	}
	public void study(){
		System.out.println(getName()+getAge());
	}
}
class ExtendsTest2{
	public static void main(String[] args){
		Teacher t=new Teacher("张三",123);
		Student s=new Student("李四",12);
		t.teacher();
		s.study();
	}
}