let mongoose=require('mongoose');
mongoose.Promise=Promise;
//1.连接数据库
let connection=mongoose.createConnection('mongodb://localhost:27017/nihaha')
//2.定义数据库集合的骨架模型,用来规定集合中文档的字段名称和类型
let UserSchema=new mongoose.Schema({
    name:String,
    age:Number
})
//3.connection的model方法来创建模型 
let UserModel=connection.model('User',UserSchema);
//向集合中插入一个文档 ，因为操作数据库很慢
UserModel.create({name:'panke',age:17},function(err,doc){
    console.log(err);
    console.log(doc);//保存完的文档对象 { __v: 0, name: 'panke', age: 17, _id: 5a18d743e393fcc4058be66d }
    /*
        --v 内部使用用来解决并发总是的一个锁
        _id 它叫主键，是一个文档最主要的键，用来唯一的标识一个文档，它的值是mongodb自动生成的，而且永远是唯一的
    */
})
//更新 update 
/*
{ n: 1, nModified: 1, ok: 1 }
n 表示符合条件的记录数
nModified： 实际更新文档数
ok=1 表示成功

更新只会匹配一条
{multi:true} 表示更新所有匹配的条数
*/
/*UserModel.update({name:'panke'},{age:18},{multi:true},function(err,result){
    console.log(err)
    console.log(result)
})
*/
//删除 remove
/*
{ n: 1, ok: 1 }, n:表示初阶删除的条数，ol表示操作成功
*/
/*
UserModel.remove({age:17},function(err,result){
    console.log(err)
    console.log(result)
})


let users=[];
for(var i=0;i<=10;i++){
    users.push({name:'haha'+i,age:i})
}
UserModel.create(users,function(err,doc){
    console.log(err)
    console.log(doc)
})
//查找
UserModel.find({age:{$gt:16}},function(err,docs){
    console.log(docs)
})
*/
//分页 按age倒序排序，每页3条，取第2页
/*
sort对结果进行排序 放age字段排序，-1 -> 倒序   1-> 正序
skip跳过前3条
exec请求才会真正把数据发给数据库请求
*/

UserModel.find({}).sort({age:-1}).skip(3).limit(3).exec(function(err,docs){
    console.log(docs)
})
