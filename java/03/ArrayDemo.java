
/*
	两种定义格式：
	数据类型[] 数组的名字
	数据类型 数组的名字[]
*/
class ArrayDemo{
	public static void main(String[] args){
		/*
		boolean[] arr;
		int[] arr2;
		String[] arrstr; //字符串，里面都是双引号
		*/
		int[] arrint=new int[3];


		System.out.println(arrint[0]);
		System.out.println(arrint[1]);
		System.out.println(arrint[2]);

		double[] arrdouble=new double[2];

		System.out.println(arrdouble[0]);
		System.out.println(arrdouble[1]);

		boolean[] arrboolean=new boolean[2];
		System.out.println(arrboolean[0]);

		char[] arrchar=new char[2];
		System.out.println(arrchar[0]);

		String[] arrString=new String[2];
		System.out.println(arrString[0]);




	}
}		