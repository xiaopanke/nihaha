import java.util.Scanner;//导包


class ScannerTest4{
	public static void main(String[] args){
		//创建键盘录入对象
		Scanner sc=new Scanner(System.in);

		System.out.println("请您输入第一个数据");
		//获取键盘的录入数据 
		int num1=sc.nextInt();

		System.out.println("请您输入第二个数据");
		int num2=sc.nextInt();

		System.out.println("请您输入第三个数据");
		int num3=sc.nextInt();

		int num=num1>num2 ? num1 :num2;
		int num4=num>num3 ?num :num3;
		System.out.println(num4);
	}
}		