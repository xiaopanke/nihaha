let buff=new Buffer(100)
//在utf-8中，一个汉字几个字节  3个
console.log(buff)

let buffer=new Buffer('盼珂')
console.log(buffer);

let bufferarr=new Buffer([0x16,0x17])
let bufferarr2=new Buffer([16,17])
console.log(bufferarr)
console.log(bufferarr2)

let buffersplice=bufferarr2.slice(0,1)//splice返回一个新的buffer
console.log(buffersplice)

//copy
let buff1=new Buffer('李')
let buff2=new Buffer('盼珂')
let b=new Buffer(9);
//targetBuffer 目标buffer
//buff1.copy(b,0,0,buff1.length)
buff1.copy(b,0) //默认就是将全部内容进行拷贝
buff2.copy(b,buff1.length,0,buff2.length)
console.log(b.toString())//可以将buffer转化成字符串

//concat
//param1 是数组buffer  param2是返回新buffer的长度
//param2可以不写
console.log(Buffer.concat([buff1,buff1,buff2],12).toString())

Buffer.myConcat=function (list,totalLength) {
    //先判断totalLength是否传递，
    //如果没传，需要自己循环数组算一个总长
    if(typeof totalLength === 'undefined'){
        totalLength=list.reduce((prev,next)=>prev+next.length,0)
        console.log(totalLength)
    }

    //创建一个大buffer，将每一个小buffer拷贝到大buffer中
    let result=new Buffer(totalLength)
    let index=0;
    list.forEach(buff=>{
        buff.copy(result,index)
        index+=buff.length;
    })
    //如果传的很大，截取有效长度
    return result.slice(0,index)
}
console.log(Buffer.myConcat([buff1,buff1,buff2]).toString())