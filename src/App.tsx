import * as React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Results from './components/Results';
import Voting from './components/Voting';

const App = () => {
  return (
    <Switch>
      <Route path="/results" component={Results} />
      <Route path="/" component={Voting} />
      <Redirect to="/" />
    </Switch>
  );
};

export default withRouter(App);
