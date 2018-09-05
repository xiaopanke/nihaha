
class Fu{
	static{
		System.out.println("静态代码块Fu");//1
	}
	{
		System.out.println("构造代码块Fu");//3
	}
	public Fu(){
		System.out.println("构造代码Fu");//4
	}
}
class Zi extends Fu{
	static{
		System.out.println("静态代码块Zi");//2
	}
	{
		System.out.println("构造代码块Zi");//5
	}
	public Zi(){
		System.out.println("构造代码Zi");//6
	}
}
class Text1{
	public static void main(String[] args){
		Zi z=new Zi();
	}
}