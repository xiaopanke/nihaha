//静态初始化：定义的时候，同时指定长度，里面的数值
// 数据类型[] 数组名=new 数据类型[]{元素1,元素2,元素3};
class ArrayDemo3{
	public static void main(String[] args){
		//静态初始化
		int[] arr=new int[]{2,23,3,4};
		System.out.println(arr); //[I@2437c6dc  I--int   2437c6dc内存地址(16进制)
		System.out.println(arr[0]);
		System.out.println(arr[1]);

		//最常见的定义方式，写法简单
		int[] arr2={1,2,3,4,5};
	}
}		