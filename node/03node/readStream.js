let fs=require('fs')
//highWaterMark 默认一次读64K
let rs=fs.createReadStream('1.txt',{highWaterMark:1})
//非流动模式，监听 一个data事件，node内部会不停的来触发 这个事件
let arr=[]

rs.on('data',(chunk)=>{//chunk  类型 buffer
    arr.push(chunk)
    console.log(chunk)
    rs.pause();//暂停的是data方法的触发
    setTimeout(()=>{
        rs.resume();//恢复data事件触发
    },500)

})
rs.on('end',()=>{ //当文件读取完毕后会触发end事件
    console.log(Buffer.concat(arr).toString())
    console.log('end');
})

//on('data') on(end) rs.pause() rs.resume

