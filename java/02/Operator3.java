/*
 && &	结果一样
*/
class Operator3 {
	public static void main(String[] args){

		int a=10;
		int b=20;
		int c=30;

		//逻辑 &
		System.out.println(a>b & b>c); //false & false =false
		System.out.println(a>b & b<c); //false & true= false
		System.out.println(a<b & b>c);//true & false=false
		System.out.println(a<b & b<c);//true & true=true

		//逻辑 &&
		System.out.println(a>b && b>c); //false && false =false
		System.out.println(a>b && b<c); //false && true= false
		System.out.println(a<b && b>c);//true && false=false
		System.out.println(a<b && b<c);//true && true=true

		
	}
}













