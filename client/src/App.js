import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Country from './components/Country'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
