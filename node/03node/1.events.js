//发布  订阅
// 一对多的关系   on 绑定  emit触发 {女生失恋：[逛街，吃，哭]}
let EventsEmitter=require('events')
let util=require('util');//util工具包用来实现继承的

util.inherits(Girl,EventsEmitter) //继承公有方法
function Girl() {}
let girl=new Girl();
let shopping=(data)=>{console.log('逛街',data)}
/*girl.on('女生失恋',shopping)
girl.removeListener('女生失恋',shopping)//移除
girl.emit('女生失恋','你好')*/
girl.once('女生失恋',shopping)//只触发一次
girl.emit('女生失恋','你好')
girl.emit('女生失恋','你好')

