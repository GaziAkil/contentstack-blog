import * as React from 'react';
import { render } from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';

const routing = (
    <Router>
      <div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/detail/:uid" component={Detail} />
        <Route path="/" component={Home} />
      </Switch>
      </div>
    </Router>
  )
render(routing, document.getElementById('main'));
