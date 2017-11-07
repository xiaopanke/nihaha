import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';

//在这个对象里模拟登录操作，里面存放一个变量isAuth,用来表示当前用户是否登陆
let fakeAuth={
  isAuth:false,//默认为未登陆状态
  login(){ //登陆

  },
  signout(){//退出

  },
}
//路由的渲染方式有三种
/*
  1.component
  2.使用render的方法，会把render的返回值渲染出来
*/
function PrivateRoute({component:Component,path}) {
  return(
    <Route path={path} render={(props) => {
      return  fakeAuth.isAuth ? <Component /> : <Redirect to={{pathname:'/login',state:{from:props.location.pathname}}} />
    }} />
  )
}

class Public extends Component{
  render(){
    return(
      <div>Public</div>
    )
  }
}
class Login extends Component{
  render(){
    return(
      <div>Login</div>
    )
  }
}
class Protected extends Component{
  render(){
    return(
      <div>Protected</div>
    )
  }
}

function AuthButton(){
  return(
    <div>
      {
        fakeAuth.isAuth ? <p>欢迎 <button>退出</button></p> : <p>你尚未登录！</p>
      }
    </div>
  )
}
class AuthExample extends Component{
  render(){
    return(
      <Router>
          <div>
            <AuthButton/>
            <ul>
              <li><Link to='/public'>公开页面</Link></li>
              <li><Link to='/login'>登陆</Link></li>
              <li><Link to='/protected'>受保护页面</Link></li>
            </ul>
            <Route path='/public' component={Public}/>
            <Route path='/login' component={Login}/>
            <PrivateRoute path='/protected' component={Protected}/>
          </div>
      </Router>

    )
  }
}

ReactDOM.render(
    <AuthExample />
    ,document.querySelector('#root')
);
