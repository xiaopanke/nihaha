import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from 'react-router-dom';



/*
  render是路径匹配则渲染，路径不匹配则不渲染
  children 都会渲染
*/
function MenuLink({to,label}) {
  return <Route path={to} children={({match}) => (
    <div  className={match ? 'active' : ''}>
      <Link to={to}>{match ? '>' : ''}{label}</Link>
    </div>
  )} />
}
function Home(props) {
  return <div>{props.match.params.name}</div>
}

function MenuLinkExample() {
  return(
    <Router>
      <div>
        <MenuLink to='/home' label='首页' />
        <MenuLink to='/about' label='关于我们' />
        <hr />
        <Route path='/:name' component={Home} />
      </div>
    </Router>
  )
}


ReactDOM.render(
    <MenuLinkExample />
    ,document.querySelector('#root')
);
