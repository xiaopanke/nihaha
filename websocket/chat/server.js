let express =require('express');
let path=require('path');
let {Message} =require('./model')
let app=express();
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(`index.html`))
})
//这个是一个http的服务器实例
let server=require('http').createServer(app);
let io=require('socket.io')(server); //websocket服务器实例
//监听客户端请求,
io.on(`connection`,(socket)=>{
    socket.on(`message`,(content)=>{
        console.log(content)
        //向当前的特定的客户端发送消息
        //socket.send(`服务器回应：${content}`)
        //向所有的客户端面发消息
        Message.create({content},(err,doc)=>{
            console.log(err)
            io.emit(`message`,doc)
        })
    })
    socket.on('getAllMessages',()=>{
        Message.find().sort({createAt:-1}).limit(10).exec((err,messages)=>{
            socket.emit('allMessages',messages)
        })
    })
})

server.listen(8080);