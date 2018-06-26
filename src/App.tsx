import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Voting from './components/Voting';

const App = () => {
  return (
    <Switch>
      <Route to="/" component={Voting} />
    </Switch>
  );
};

export default App;
