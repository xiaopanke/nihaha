let fs=require('fs')
/*
function copySync(source,target) {
    //readFileSync writeFileSync
    fs.writeFileSync(target,fs.readFileSync(source,'utf8'))
}
copySync('1.txt','2.txt')*/
console.time('a');
/*function copy(source,target,callback) {
    //readFile writeFile
    fs.readFile(source,function (err,data) {
        if(err) return callback();
        fs.writeFile(target,data,callback)
    })
}
copy('1.txt','2.txt',(err)=>{})*/
console.timeEnd('a');



//判断文件或者文件夹是否存在
let flag=fs.existsSync('1.txt')
console.log(flag)
//创建文件，删除目录，删除文件，追加内容，判断文件状态

