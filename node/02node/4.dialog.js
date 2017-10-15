class Dialog{
    constructor(){

    }
    create(){
        console.log('创建dialog');
    }
}

//在exports属性上增加了一个dialog属性
exports.dialog=Dialog;

/*
function Dialog() {

}
Dialog.prototype.create=function () {

}*/
