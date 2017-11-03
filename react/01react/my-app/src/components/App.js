import React from 'react';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import Home from './Home';
import Profile from './Profile';
import User from './User';

export default (
  <Router>
    <div>
      <Route path='/home' component={Home} />
      <Route path='/user' component={User} />
      <Route path='/profile' component={Profile} />
    </div>
  </Router>
)
