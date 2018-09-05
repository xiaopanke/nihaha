/*
	使用java已经做好的类，java.lang.Math
	数学计算类：
		静态成员变量
		PI
		double random()

*/

class MathDemo{
	public static void main(String[] args){
		//使用Math类名直接调用静态成员变量 PI
		double d=Math.PI;
		System.out.println(d);
		System.out.println(1.301/100);//二进制表示的小数不精确

		for (var i=0;i<100 ;i++ ) {
			double number=Math.random();
			System.out.println(number);
		}
		
	}
}