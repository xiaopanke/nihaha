
/*
	两种定义格式：
	数据类型[] 数组的名字
	数据类型 数组的名字[]

	在面向对象里，只要用了new 就会开劈一个内存
*/
class ArrayDemo1{
	public static void main(String[] args){
		int[] arr1=new int[2];
		int[] arr2=new int[4];

		System.out.println(arr1[0]);
		System.out.println(arr2[0]);

		System.out.println(arr1);
		System.out.println(arr2);

	}
}		