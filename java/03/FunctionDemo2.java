
import java.util.Scanner;
class FunctionDemo2{
	public static void main(String[] args){
		
		Scanner sc=new Scanner(System.in);
		System.out.println("请输入行：");
		int a=sc.nextInt();
		System.out.println("请输入列：");
		int b=sc.nextInt();
		xingxing(a,b);
	}
	/*
		在控制台输出星形
		两个明确：
			返回值类型：void （没有明确的时候是void）
			参数列表：
	*/
	public static void xingxing(int a,int b){
		for (int x=1;x<=a ;x++ ) {
			for (int y=1;y<=b ;y++ ) {
				System.out.print("*");
			}
			System.out.println();
		}
		return;
	}
}		