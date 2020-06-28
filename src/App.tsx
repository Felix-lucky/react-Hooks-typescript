import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './view/Home';
import Detail from './view/Detail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Redirect to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
