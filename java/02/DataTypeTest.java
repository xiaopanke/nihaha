class DataTypeTest {
	public static void main(String[] args){
		byte b1=3;
		byte b2=4;

		//byte b3=b1+b2; //错误: 不兼容的类型: 从int转换到byte可能会有损失

		byte b3=(byte)(b1+b2); //强制转换

		byte b4=3+4; //常量先计算 =7，就看7在不在byte里
		byte b5=3+125; //报错
		System.out.println(b5);
	}
}
















