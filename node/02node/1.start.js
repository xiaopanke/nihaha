//在命令行下，通过命令运行  node 文件名
//通过webstrom 运行
//console.log('hello');

/*function make() {
    setTimeout(function () {
        console.log('做饭')
    },2000)
}
function eat() {
    console.log('吃')
}
make();
eat();*/
function make(fn) {
    setTimeout(function(){
        console.log('做饭')
        fn();
    },2000)
}

function eat() {
    console.log('吃饭')
}
make(eat)
console.log(global)
