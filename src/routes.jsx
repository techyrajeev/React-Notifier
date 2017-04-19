import React                             from 'react';
import { browserHistory, Router, Route } from 'react-router';
import Main                              from './components/main';

module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}/>
  </Router>
);
