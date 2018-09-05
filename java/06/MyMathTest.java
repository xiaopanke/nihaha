class MyMath{
	private int a;
	private int b;
	MyMath(){};
	MyMath(int a,int b){
		this.a=a;
		this.b=b;
	}
	public void setA(int a){
		this.a=a;
	}
	public void setB(int b){
		this.b=b;
	}
	public int getA(){
		return this.a;
	}
	public int getB(){
		return this.b;
	}
	//求和
	public int getSum(){
		return a+b;
	}	
	//求减
	public int getSubtract(){
		return a-b;
	}	
	//求乘
	public int getMultiply(){
		return a*b;
	}	
	//求除
	public int getDivide(){
		if(b==0){
			return a;//到后面也可以用抛出异常
		}else{
			return a/b;
		}
		
	}	
}


class MyMathTest{
	public static void main(String[] args){
		MyMath my=new MyMath(5,2);
		System.out.println(my.getSum());
	}
}