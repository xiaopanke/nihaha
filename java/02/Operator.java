/*
	/: 两个整数相除得到的结果还是整数，获取的是除法的商；想得到小数，请使用浮点数
	%: 获取的是除法的余数，得到的结果的符号和左边符号一致
*/
class Operator {
	public static void main(String[] args){

		int a=3;
		int b=4;

		//使用算术运算符
		System.out.println(a+b);
		System.out.println(a-b);
		System.out.println(a*b);
		System.out.println(a/b); //0
		System.out.println(a*1.0/b); //0.75 将int转化一下

		//%

		System.out.println(3%4); //3
		System.out.println(-3%4); //-3
		System.out.println(3%-4); //3
		System.out.println(-3%-4); //-3
	}
}
















