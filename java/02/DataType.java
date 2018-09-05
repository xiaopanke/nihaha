/*
	数据类型：
		a:基本数据类型
			1、数值型
				整数型：byte,short,int,long
				浮点数: float,double

			2、字符型
				char
			3、布尔类型
				boolean 
		b:引用数据类型:数据，类，接口

		整数默认是Int类型的，浮点数默认是double类型的

		格式：
			数据类型 变量名=变量值；


		我们在定义long类型的数据的时候，我们需要对其标志一下下，使用L或l，建议使用L	
		我们在定义float类型的数据的时候，我们需要对其标志一下下，使用F或f，建议使用f	
*/
class DataType {
	public static void main(String[] args){
		//定义一个字节的变量
		byte x=16;
		System.out.println(x);

		//定义短整形的变量
		short s=100;
		System.out.println(s);

		//定义整形的变量
		int i=300;
		System.out.println(i);
		
		//错误的，过大的整数
		/*int m=100000000000000;
		System.out.println(m);*/

		//报错，需要用L
		// long m=100000000000000;
		// System.out.println(m);

		long m=100000000000000L;
		System.out.println(m);
		long n=23;
		System.out.println(n);
		long n2=23L;
		System.out.println(n2);

		//定义一个单精度类型的变量
		//报错,可能损失精度
		// float f=45.34;
		 float f=45.34f;
		 System.out.println(f);

		//定义一个双精度类型的变量
		 double d=34.531313;
		 System.out.println(d);

		 //定义一个char类型的变量
		 char ch='a';
		 System.out.println(ch);

		 //定义一个boolean类型的变量
		 boolean k=true;
		 System.out.println(k);


	}
}











