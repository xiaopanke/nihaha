import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from 'react-router-dom';

//在这个对象里模拟登录操作，里面存放一个变量isAuth,用来表示当前用户是否登陆
let fakeAuth={
  isAuth:!!localStorage.getItem('isAuth'),//默认为未登陆状态
  login(){ //登陆
    this.isAuth=true;
    localStorage.setItem('isAuth','true')
  },
  signout(){//退出
    this.isAuth=false;
    localStorage.clear();
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
  login=() => {
    fakeAuth.login();
    //跳转登陆前的页面
    if(this.props.location.state){
      this.props.history.push(this.props.location.state.from.pathname)
    }else{
      this.props.history.push('/')
    }

  }
  render(){
    let {from} =this.props.location.state || {from:'/'};
    return(
      <div>
        <p>你需要登陆后才能访问{from.pathname}路径</p>
        <button onClick={this.login}>登陆</button>
      </div>
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

let AuthButton=withRouter(function(props){
  return(
    <div>
      {
        fakeAuth.isAuth ? <p>欢迎 <button onClick={() => {
          fakeAuth.signout();
          props.history.push('/')
        }}>退出</button></p> : <p>你尚未登录！</p>
      }
    </div>
  )
})
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



/*
1.如何在跳转路径的时候传参数  state
2.

*/
