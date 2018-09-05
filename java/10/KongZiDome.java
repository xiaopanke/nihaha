/*
无限扩展子类，

多态中，只能使用子类父类的共有成员，不能直接使用子类的特有内容


*/

class KongZiDie{
	 int age=70;
	 public void teacher(){
	 	System.out.println("做官");
	 }
}

class KongZi2 extends KongZiDie{
	int age=70;
	public void teacher(){
	 	System.out.println("儒学");
	}
	public void swimming(){
		System.out.println("游泳");
	}
}
class KongZi extends KongZiDie{
	 int age=30;
	 public void teacher(){
	 	System.out.println("论语");
	 }
	 public void playGame(){
	 	System.out.println("斗地主");
	 }
}
class KongZiDome{
	public static void main(String[] args){
		KongZiDie kd=new KongZi(); //类型提升 ，子类提升为父类类型
		kd.teacher();
		System.out.println(kd.age);
		KongZi k=(KongZi)kd;//类型的强制转换  向下转型
		k.playGame();

		kd=new KongZi2();
		kd.teacher();

		KongZi2 k2=(KongZi2)kd;
		k2.swimming();


	}
}