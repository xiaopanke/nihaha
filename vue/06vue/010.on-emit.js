//发布，订阅 预先安排一些事（一种 一对多的关系）

function Girl(){
    this._events={};
}
Girl.prototype.on=function (eventName,callback) {
    if(this._events[eventName]){//看看对象中是否存在这个事件
        this._events[eventName].push(callback)
    }else{
        this._events[eventName]=[callback]
    }
}
Girl.prototype.emit=function (eventName,...args) {//剩余运算符
    if(this._events[eventName]){
        this._events[eventName].forEach(cb=>cb(...args));//拓展运算符
    }
}
Girl.prototype.off=function (eventName,callback) {//取消订阅
    if(this._events[eventName]){
        this._events[eventName]=this._events[eventName].filter(cd=>cd!==callback);
    }
}

let girl=new Girl();

let shopping =function (val) {
    console.log('购物')
    console.log(val);
}
let cry =function (val) {
    console.log('cry')
    console.log(val);
}

girl.on('女生失恋',shopping)
girl.off('女生失恋',shopping)
girl.emit('女生失恋','我')