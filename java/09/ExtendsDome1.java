
/*
	java.lang.Object所有类的爹
	当你创建子类对象的时候，父类构造方法也运行了
	在子类的构造方法中，第一行有默认的隐式代码，不写也有，代码就是super();调用父类空参数构造方法

	javac默认加上去的构造方法，类名(){super;}


*/
class Fu{
	Fu(){
		super();
		System.out.println("父类构造方法");
	}
}
class Zi extends Fu{
	Zi(){
		super();
		System.out.println("子类构造方法");
	}
}
class ExtendsDome1{
	public static void main(String[] args){
		Zi z=new Zi();

	}
}