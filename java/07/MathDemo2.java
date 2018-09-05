/*
	使用java已经做好的类，java.lang.Math

*/
import java.util.Scanner;
class GetNumber{
	public int getNumber(){
		return (int)(Math.random()*100+1);
	}
}
class MathDemo2{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		int number=new GetNumber().getNumber();

		while(true){
			int n=sc.nextInt();
			if(n>number){
				System.out.println("大了");
			}else if(n<number){
				System.out.println("小了");
			}else{
				System.out.println("中了");
				break;
			}
		}
		
	}
}