
/*
代码块：
	构造代码块：类中 

	类的加载顺序：
		编写顺序，加载自己的静态成员：从上入下
		先加载静态，再加载非静态

	类的运行顺序：静态代码块，构造代码块，构造方法
*/

class Code{
	{
		System.out.println("构造代码块");
	}
	static{
		System.out.println("静态代码块");
	}
	Code(){
		System.out.println("构造方法");
	}
}
class CodeDemo{
	public static void main(String[] args){
		new Code();
	}
}