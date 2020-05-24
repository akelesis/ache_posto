import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { Container } from './styles';

import About from './pages/About'
import Company from './pages/Company'
import Contact from './pages/Contact'
import Station from './pages/Station'

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/company" component={Company}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/station" component={Station}/>
        </Switch>    
    </BrowserRouter>
  )
}

export default Routes;