/*

*/

class DataType3 {
	public static void main(String[] args){
		//定义两个int类型的变量
		int a=3;
		int b=4;
		int c=a+b;
		System.out.println(c);

		//报错：不兼容的类型: 从int转换到byte可能会有损失
		int e=3;
		byte f=4;
		byte g=e+f;
		System.out.println(g);
	}
}