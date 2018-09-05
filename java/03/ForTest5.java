//水仙花数 

class ForTest5{
	public static void main(String[] args){
		int count=0;
		for (var i=100;i<=999 ;i++ ) {
			//获取当前数的第一位数
			int ge=i%10;
			int shi=i/10%10;
			int bai=i/10/10%10;

			//获取立方和
			int y=ge*ge*ge+shi*shi*shi+bai*bai*bai;
			if(y==i){
				System.out.println(i);
				count++;
			}
			
		}
		System.out.println(count);
	}
}		