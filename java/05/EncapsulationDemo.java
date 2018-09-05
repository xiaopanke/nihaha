/*
	封装：
*/
class Person{
	String name;

	/*
	private 成员修饰 ，不能修改局部
	*/
	//int age;
	private int age;

	//setAge方法，对成员变量age赋值
	public void setAge(int a){
		if(a<0 || a>100){
			System.out.println("年龄非法，采用默认值处理");
			age=8;
		}else{
			age=a;
		}
	}
	public void speak(){
		System.out.println(name+age+"说话");
	}
}	
class EncapsulationDemo{
	public static void main(String[] args){
		//创建对象 ，赋值成员变量，调用speak
		Person p=new Person();
		p.name="张三";
		//p.age=17;
		p.setAge(1800);
		p.speak();
		System.out.println();
	}
}		