import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './componentsV2/Navbar';
import Home from './componentsV2/pagesV2/Home';
import Works from './componentsV2/pagesV2/Works';
import About from './componentsV2/pagesV2/About';
import Contacts from './componentsV2/pagesV2/Contacts';
import './reset.css';

function AppV2() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/works' component={Works} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </Router>
    </>
  );
}

export default AppV2;
