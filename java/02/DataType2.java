/*
	定义变量的注意事项：
		a：相同作用域不能定义相同的名字
		b: 没有初始值的时候不能使用
*/
class DataType2 {
	public static void main(String[] args){
		//定义一个int类型的变量
		int a=300;
		System.out.println(a);

		//定义一个int类型的变量
		//错误 的，相同作用域不能定义相同的名字
		// int a=200;
		// System.out.println(a);

		//错误 的，
		// int b;
		// System.out.println(b);

		int c;
		c=34;
		System.out.println(c);

		int m=23;int n=32;;; int j=323;
		System.out.println(m);
		System.out.println(n);
		System.out.println(j);	

		int x,y;
		x=12;
		y=54;
		System.out.println(x);
		System.out.println(y);


		
		

	}
}