import React from 'react';
 import ReactDOM from 'react-dom';

let imgurl=`https://www.baidu.com/img/wanshengdoodle_677234cad70a5974a64e4665c6485c71.gif`
let className=`haha xixi`

let ele=<div>
  <button tabIndex='1'>1</button>
  <button tabIndex='2'>2</button>
  <button tabIndex='3'>3</button>
  <button tabIndex='3'>3</button>
  <img src={imgurl} className={className} style={{border:'1px solid red'}} />
</div>
/*
ele就是虚拟DOM
其实是一个普通的js对象，但是可以描述真实的DOM长什么样子
*/

ReactDOM.render(
  ele,
  document.getElementById('root')
);
