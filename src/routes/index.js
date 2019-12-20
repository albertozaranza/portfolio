import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Container } from './styles';

import About from '../components/About';
import Home from '../components/Home';

export default function Routes() {
  return (
    <BrowserRouter basename="/portfolio">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
