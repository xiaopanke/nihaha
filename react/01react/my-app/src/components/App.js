import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home';
import Profile from './Profile';
import User from './User';
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import MenuLink from './MenuLink'
export default (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
              <div className="navbar-brand">
                珠峰用户管理系统
              </div>
            </div>
            <ul className="nav navbar-nav">
            <MenuLink label="首页" to='/home'></MenuLink>
            <MenuLink label="用户管理" to='/user'></MenuLink>
              <MenuLink label="个人设置" to='/profile'></MenuLink>
            </ul>
        </div>
      </nav>
      <div className="container">
          <div className="row">
            <div className="col-sm-12">
                <Switch>
                  <Route path='/' exact  component={props=><div>首页</div>} />
                  <Route path='/home' component={Home} />
                  <Route path='/user' component={User} />
                  <Route path='/login' component={Login} />
                  <ProtectedRoute  path='/profile' component={Profile} />
                </Switch>
            </div>
          </div>
      </div>

    </div>
  </Router>
)
