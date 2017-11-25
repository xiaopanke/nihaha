let mongoose =require('mongoose');
mongoose.Promise=Promise;
let conn=mongoose.createConnection(`mongodb://localhost/nihaha`);

//创建消息的骨架模型
let MessageSchema=new mongoose.Schema({
    content:String,
    createAt:{
        type:Date,
        default:Date.now
    }
})
//创建并导出用于操作数据库的骨架模型
exports.Message=conn.model('Message',MessageSchema)