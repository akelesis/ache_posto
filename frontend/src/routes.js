import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { Container } from './styles';

import About from './pages/About/About.jsx'
import Company from './pages/Company/Company.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Station from './pages/Station/Station.jsx'
import LoginPosto from './pages/LoginPosto/LoginPosto.jsx'

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/company" component={Company}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/station" component={Station}/>
            <Route path="/login-posto" component={LoginPosto}/>
        </Switch>    
    </BrowserRouter>
  )
}

export default Routes;