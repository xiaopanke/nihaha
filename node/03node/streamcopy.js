let fs=require('fs')
console.time('aa')
function copy(srouce,target) {
    let rs=fs.createReadStream(srouce,{highWaterMark:4})
    let ws=fs.createWriteStream(target,{highWaterMark:1})
    rs.on('data',(chunk)=>{
        console.log(chunk)
        if(!ws.write(chunk)){//如果写不下就暂停
            rs.pause()//会暂停data事件触发
        }
    })
    ws.on('drain',()=>{//当给我的内容全部写完后会触发drain事件
        rs.resume()
    })
    rs.on('end',()=>{//监听读取完毕的事件
        ws.end();
    })
}
copy('1.txt','2.txt')
console.timeEnd('aa')