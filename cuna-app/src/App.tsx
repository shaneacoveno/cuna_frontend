import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Disqualified from './components/Disqualified/Disqualified';
import Landing from './components/landingPage/landingPage';
import NewAccount from './components/NewAccount/NewAccount';



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/disqualified'>
          <Disqualified />
        </Route>
        <Route path='/newaccount'>
          <NewAccount />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
