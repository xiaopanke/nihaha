
/*
	静态方法中，不能写this,也不能super
*/
class Person{
	String name;
	int age;
	static String country;//static 

	public static void speak(){
		/*
			方法是静态，访问了非静态变量，name age 出现编译失败 country 没有出现错误
			为什么，生命周期  
		*/
		System.out.println(name+"--"+age+"--"+country);
		System.out.println(country);
	}
}


class StaticDemo{
	public static void main(String[] args){

		System.out.println("123");
		Person.speak();
	}
}