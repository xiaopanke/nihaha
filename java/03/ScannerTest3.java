import java.util.Scanner;//导包


class ScannerTest3{
	public static void main(String[] args){
		//创建键盘录入对象
		Scanner sc=new Scanner(System.in);

		System.out.println("请您输入第一个数据");
		//获取键盘的录入数据 
		int num1=sc.nextInt();

		System.out.println("请您输入第二个数据");
		int num2=sc.nextInt();

		boolean flag=num1==num2;
		System.out.println(flag);
	}
}		