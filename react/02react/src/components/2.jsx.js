//引入react的导出对象
import React from './react';
import ReactDom from './react-dom';

let element=React.createElement('h1',{id:'title'},React.createElement(
          "span",
          { className: 'title' },
          "React 小书"
        ));
ReactDom.render(element,document.querySelector('#root'))
