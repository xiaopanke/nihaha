class Phone{
	public void call(){
		System.out.println("拨号打电话");
	}
	public void receive(){
		System.out.println("铃声");
		System.out.println("显示号码");
	}
}
class NewPhone extends Phone{
	public void call(){
		//调用父类的call方法
		super.call();
	}
	public void receive(){
		System.out.println("彩铃");
		System.out.println("大头像");
		System.out.println("归属地");
		super.receive();
	}
}
class ExtendsTest{
	public static void main(String[] args){
		Phone p=new Phone();
		p.call();
		p.receive();
		System.out.println("---------------------");
		NewPhone np=new NewPhone();
		np.call();
		np.receive();
	}
}