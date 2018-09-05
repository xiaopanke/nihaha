class Student{
	private String name;
	private int age;
	Student(){}
	Student(String name,int age){
		this.name=name;
		this.age=age;
	}

	public void setName(String name){
		this.name=name;
	}

	public void setAge(int age){
		this.age=age;
	}

	public String getName(){
		return this.name;
	}

	public String getAge(){
		return this.age;
	}

	public void show(){
		System.out.println(name+"---"+age);
	}
}

class StudentDemo{
	public static void main(String[] args){

	}
}