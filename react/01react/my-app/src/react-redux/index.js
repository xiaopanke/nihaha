import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/App';
import store from './store/index'

//通过store属性把redux仓库传给了provider,然后provider又会给了它的子组件
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.querySelector('#root'))
