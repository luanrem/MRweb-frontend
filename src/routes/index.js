import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import System from '../pages/System';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main}/>

      <Route path="/login" component={SignIn}/>
      <Route path="/register" component={SignUp}/>
      <Route path="/system" component={System}/>
    </Switch>
  );
}
