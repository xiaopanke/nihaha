
class Fu{
	static{
		System.out.println("静态代码块Fu");//1
	}
	public Fu(){
		System.out.println("构造代码Fu");//4
	}
	{
		System.out.println("构造代码块Fu");//3
	}
	
}
class Zi extends Fu{
	static{
		System.out.println("静态代码块Zi");//2
	}
	public Zi(){
		System.out.println("构造代码Zi");//6
	}
	{
		System.out.println("构造代码块Zi");//5
	}
	public static void a(){}
}
class Text2{
	public static void main(String[] args){
		//Zi z=new Zi(); //先走静态，再走构造代码块，再走构造代码 
		Zi.a(); //直走静态
	}
}