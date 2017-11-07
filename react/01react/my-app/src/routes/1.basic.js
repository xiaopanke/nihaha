import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom';

function Home(){
  return <div>home</div>
}
function About(){
  return <div>About</div>
}
/*
Router是路由容器，就是他负责处理在内部定义的所有路由
A <Router>一个组件只可能拥有唯一的子元素
因为默认匹配路径的时候是匹配的前缀，

*/
ReactDOM.render(
    <Router>
      <div className='container'>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </div>
    </Router>
    ,document.querySelector('#root')
);
