import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

function Home(){
  return <div>home</div>
}
function About(){
  return <div>About</div>
}
/*
history:
  push(路径，状态对象)  表示跳转路径
  goback() 返回上一个路径
location:
    pathname 当前的路径名
    state  状态对象 当此路径是通过push跳过来的，就指的push的第二个参数
match:匹配 是当前URl中的路径和当前路径的path属性的切尔西结果
  isExact 是否精确匹配
  params 参数

*/
function User(props){
  console.log(props)
  return <div>User{props.match.params.id}</div>
}
let users=[
  {id:1,name:'panke',age:17},
  {id:2,name:'panke2',age:18},
]
function Users(props){
  return (
    <ul>
        {users.map((item,index) => (<li key={index}><Link to={{pathname:'/detail',state:item}}>{item.name}</Link></li>
      ))}
    </ul>
  )
}
function Detail(props){
  return (
      <div>age:{props.location.state.age} id:{props.location.state.id} name:{props.location.state.name}</div>
  )


}
/*
Router是路由容器，就是他负责处理在内部定义的所有路由
A <Router>一个组件只可能拥有唯一的子元素
因为默认匹配路径的时候是匹配的前缀，就是说只要当前的URL路径是以本路由的path开始，那会渲染对应的组件
exact={true}精确匹配
*/
ReactDOM.render(
    <Router>
      <div className='container'>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/about'>关于</Link></li>
          <li><Link to='/user/123'>用户详情</Link></li>
          <li><Link to='/users'>用户列表</Link></li>
        </ul>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/user/:id' component={User}/>
        <Route path='/users' component={Users}/>
        <Route path='/detail' component={Detail}/>
      </div>
    </Router>
    ,document.querySelector('#root')
);


/*
  HashRouter
  BrowserRouter
  利用的是HTML5 historyAPI pushState
*/
