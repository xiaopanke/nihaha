/*
	继承的由来
		多个类中出现了相同的成员，代码的重复就很高

		将相同的内容抽取来，形成另外的一个类
		让老师类和学生类都使用人类中的成员

		class Teacher extends Person

		老师类，继承自人类
		Teacher类，是Person的孩子，子类、派生类
		Person类，是Teacher的父亲，父类、超类、基类

		子类就可以直接使用父类的成员，私类的用不了

		继承的好处：
			减少代码 
			子类可以扩展父类的功能 
			继承使类与类之间产生了关系 ，有了这个关系导致了面向对象第三个特征多态

		耦合：紧密性	
*/
class Person{
	String name;
	int age;
	public void eat(){}
}
class Teacher extends Person{
	public void teacher(){}
}		
class Student extends Person{
	public void study(){}
}		

class ExtendsDemo{
	public static void main(String[] args){
		Teacher t=new Teacher();
		System.out.println(t.name);
	}
}