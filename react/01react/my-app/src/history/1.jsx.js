//react是核心库
import React from 'react';
//react跟DOM相关的库
 import ReactDOM from 'react-dom';

 //使用ReactDOM的render方法，把一个h1标题存放到DOM容器内
 //因为这种JSX语法是React扩展的语义，跟原生JS不一样，这样的代码是不是能直接在浏览器中运行，需要经过webpack中babel-loader的编译
 //React 元素是构建React应用的基本单位
 //如果希望在React元素内嵌表态式，则需要用{}包裹起来，表达式就是任意的变量、数字的运算结合，表达必须要返回一个结果

 let user={
   first:'李',
   last:'盼珂'
 }
 function haha(user){
    return `${user.first}${user.last}`
 }
 function xixi(user) {
   return user ? haha(user) : `你好，陌生人`
 }
ReactDOM.render(
  <h1>{xixi()}</h1>,
  document.getElementById('root')
);
