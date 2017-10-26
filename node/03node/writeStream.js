let fs=require('fs')
//ws表示的是可写流 默认写的编码是utf8
let ws=fs.createWriteStream('2.txt',{highWaterMark:1});
//console.log(ws)
let flag=ws.write('1234567890');//string 或者 buffer
console.log(flag)
//此返回值 用来描述，是否可以继续写入，比如说如果读取了64k ,写的空间16k ,往文件中写，发现写不下，返回false,就不要再继续读取了。

ws.on('drain',()=>{//抽干方法 当内存中的内容全部写入文件后触发此函数
    console.log('drain')
})
ws.end('2');//会将end中内容再次调用write方法，最后将文件关闭，end方法会将没有写入的内容强制写入最后再关闭