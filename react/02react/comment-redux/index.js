import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './components/CommentApp';
//导入仓库
import store from './store/index';
//导入一个组件，可以实现仓库和ui组件的连接
import {Provider} from 'react-redux'
//Provider负责接收store属性，然后传入子组件
ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>
  ,document.querySelector('#root'))
