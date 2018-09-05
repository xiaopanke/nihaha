/*
	键盘录入的步骤：
	1.导包  import java.util.Scanner; 
		位置在class上边

*/

import java.util.Scanner;


class ScannerDome{
	public static void main(String[] args){
		//创建
		Scanner sc=new Scanner(System.in);
		System.out.println("请您 输入一个数据");

		//InputMismatchException exception 异常  nextInt方法获取的是一个Int类型的数据 
		int num1=sc.nextInt();

		System.out.println("请您 输入二个数据");

		//InputMismatchException exception 异常  nextInt方法获取的是一个Int类型的数据 
		int num2=sc.nextInt();

		System.out.println("您输入的数据1是："+num1);
		System.out.println("您输入的数据2是："+num2);
	}
}		