import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './modules/home/Home';
import App from './App';

function Main() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/*" component={App} />
    </Switch>
  )
}

export default Main;
