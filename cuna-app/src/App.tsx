import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Disqualified from './components/Disqualified/Disqualified';

import Landing from './components/landingPage/landingPage';


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

      </Switch>
    </Router>
  );
}

export default App;
