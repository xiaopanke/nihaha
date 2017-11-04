//引入react的导出对象
import React from './react';
import ReactDom from './react-dom';

let element=React.createElement('h1',{id:'title'},'hello');
ReactDom.render(element,document.querySelector('#root'))
