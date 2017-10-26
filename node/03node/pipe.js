let fs=require('fs')
console.time('a')
function copy(srouce,target) {
    let rs=fs.createReadStream(srouce,{highWaterMark:4})
    let ws=fs.createWriteStream(target,{highWaterMark:1})
    rs.pipe(ws) //将可读流的内容导入到可写流中，会默认调用ws的write和end方法
}
copy('1.txt','2.txt')
console.timeEnd('a')