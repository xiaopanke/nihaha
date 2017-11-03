
//props={path:'/profile',component:Profile}
//...rest 其余的
//rest ={path:'/profile'}
/*
这两个是一样的， {...rest} 叫做展开运算符
<Route path='/profile' />
<Route {...rest} />
*/
//Redirect  重定向
import React from 'react';
import {Redirect,Route} from 'react-router-dom'
export default  function({component:Component},...rest) {
  return <Route {...rest} render={(props)=>
    localStorage.getItem('login') ?  <Component /> : <Redirect to={{
      pathname:'/login',
      state:{from:props.location.pathname}
    }} />
  } />
}
