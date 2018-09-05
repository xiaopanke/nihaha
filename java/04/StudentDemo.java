
/*
	描述学生事物
	根据学生类，创建学生对象，使用对象中的属性与方法；
	创建对象格式：
		数据类型 变量名=值；
		类类型(类名) 变量=new 类名();
*/
class Student{
	String name;
	int age;
	String grade;

	public void eat(){
		System.out.println(name+age+grade+" 在吃饭");
	}
	public void sleep(){
		System.out.println(name+age+grade+" 在睡觉");
	}
}
class StudentDemo{
	public static void main(String[] args){

		//创建学生对象 
		//类类型(类名) 变量=new 类名();
		Student s=new Student();
		s.name="李盼珂";
		s.age=17;
		s.grade="一年级";
		s.eat();
		s.sleep();
		System.out.println(s);
	}
}		