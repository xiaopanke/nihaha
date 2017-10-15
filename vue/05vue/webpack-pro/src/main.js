console.log('我很漂亮');
console.log('我很漂亮121212122');

let fn=()=>{
    console.log('hello');
}
fn()

//通过require引入，打包后会将内容一起打包到bundle.js中
/*let str=require('./a.js')
console.log(str)
*/
//import a from './a.js'
//console.log(a.str)

import {str2} from './a.js'
console.log(str2);

let arr1=[1,2,3]
let arr2=[4,5,6]
console.log([...arr1,...arr2]) //es6

let obj1={name:2}
let obj2={age:2}

console.log({...obj1,...obj2})//es7


//把css文件当作一个模块引用进来
import './index.css'



//把less文件当作一个模块引用进来
import './style.less'


//不能在js中直接使用图片地址，否则会导致404(因为webpack认为是字符串，不会进行解析)，应用图片需要
//用import

import png from './1.png'
let oImg=document.createElement('img');
oImg.src=png;
document.body.appendChild(oImg)
