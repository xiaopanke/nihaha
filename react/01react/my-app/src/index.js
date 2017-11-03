import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

function Routehaha() {
  return <h1>Routehaha</h1>
}
function Home() {
  return <h1>home</h1>
}
function User() {
  return <h1>User</h1>
}
function Profile() {
  return <h1>Profile</h1>
}
ReactDOM.render(
  <Router>
    <div>
      <Route path='/' component={Routehaha} />
      <Route path='/home' component={Home} />
      <Route path='/user' component={User} />
      <Route path='/profile' component={Profile} />
    </div>
  </Router>,
  document.querySelector('#root')
)
