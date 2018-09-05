/*
	 继承后，子类，父类中，成员方法的特点	

	 但是子类重写父类方法，必须保证子类方法权限大于或者等于父类方法权限
	 public protected 默认 private

	 
*/

class Fu{
	public void show(){
		System.out.println("父类.show");
	}
}	
class Zi extends Fu{
	public void show(){
		System.out.println("子类.show");
	}
}

class ExtendsDemo4{
	public static void main(String[] args){
		Zi z=new Zi();
		z.show();
		
	}
}