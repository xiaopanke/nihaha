let fs=require('fs')
/*
* 如果文件不存在会创建 文件。如果存在会将内容清空
* 默认写入是utf-8格式
* */
//fs.writeFileSync('11.txt',12343212)
fs.writeFile('11.txt',12343212,function (err) {
    if(err)return console.log(err)
})
