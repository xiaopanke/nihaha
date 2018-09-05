/*
	final （最终） 关键字 修饰符
	final 可以修饰 局部变量---一次赋值，终身不变，变成了常量了
	final 成员变量 ：
		 一次赋值，终身不变,但是成员变量有默认值，final固定的不是默认值，是我们手动赋值
	final 类
	final 方法
*/
class Person{
	//final int a=0;//手动赋值

	final int a;
	//用构造方法赋值
	Person(){
		a=1;
	}
	//用构造方法重载赋值
	Person(String s){
		a=2;
	}
	public void show(){
		System.out.println(a);
	}
}
class FinalDome{
	public static void main(String[] args){
		/*final int x=1;
		//System.out.println(x++);//错误: 无法为最终变量x分配值
		System.out.println(x+1);//没有改值*/

		new Person().show();//走空参数的构造方法
		new Person("a").show();//走有参数的构造方法
	}
}