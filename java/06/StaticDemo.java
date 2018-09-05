
/*
	
*/
class Person{
	String name;
	int age;
	static String country;//static 

	public void speak(){
		System.out.println(name+"--"+age+"--"+country);
	}
}


class StaticDemo{
	public static void main(String[] args){
		System.out.println(Person.country);
		Person p=new Person();
		p.name="lisi";
		p.age=15;
		//p.country="china";
		p.speak();
		System.out.println(Person.country);

		Person p2=new Person();
		p2.name="惠若琪";
		p2.age=12;
		p2.country="china";
		p2.speak();

		System.out.println(Person.country);

	}
}