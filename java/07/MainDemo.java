
/*

	public:最大权限 ，方法JVM调用，权限必须足够大
	static:类名调用 java类名 不需要对象 

	void:没有返回值  如果有返回 ，返回值就会JVM
	main: Java固定的方法名，
	String[] args:


	java xxx 可以写内容  
*/
class MainDemo{
	//JVM传递的参数 String[] new String[0]
	public static void main(String[] args){
		System.out.println(args.length);
	}
}