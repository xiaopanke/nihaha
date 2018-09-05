class Person{
	public void eat(){

	}
}

class SouthPerson extends Person{
	public void eat(){
		System.out.println("南方人吃米");
	}
}
class NorthPerson extends Person{
	public void eat(){
		System.out.println("北方人吃面");
	}
}

class DuoTaiTest{
	public static void main(String[] args){
		SouthPerson sp=new SouthPerson();
		sp.eat();

		NorthPerson np=new NorthPerson();
		np.eat();

		Person p=new SouthPerson();
		p.eat();

		p=new NorthPerson();
		p.eat();

	}
	


}