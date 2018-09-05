/*
	修饰符：public static
	返回的类型： 
	方法名：
	参数列表：
*/

class FunctionDemo{
	public static void main(String[] args){
		/*int a=10;
		int b=20;
		int sum=a+b;

		System.out.println(sum);


		int x=30;
		int y=23;
		int sum2=x+y;
		System.out.println(sum2);*/

		int a=10;
		int b=30;
		int c=Sum(a,b);
		System.out.println(c);


	}
	public static int Sum(int a,int b){
		int sum=a+b;
		return sum;
	}
}		