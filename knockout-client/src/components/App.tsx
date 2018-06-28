import * as React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import Results from '../containers/Results';
import Voting from '../containers/Voting';

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
