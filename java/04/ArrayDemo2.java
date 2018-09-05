
class ArrayDemo2{
	public static void main(String[] args){
		int[] arr1=new int[3];

		arr1[1]=6;
		System.out.println(arr1[1]);
		System.out.println(arr1);

		int[] arr2=arr1;
		System.out.println(arr2);
		arr2[1]=9;
		System.out.println(arr1[1]);
	}
}		