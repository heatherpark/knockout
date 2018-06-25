import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Voting from './components/Voting';
import './index.css';

const pair = ['Trainspotting', '28 Days later'];

ReactDOM.render(
  <Voting
    winner="Trainspotting" 
    hasVoted="Trainspotting"
    pair={pair} 
    vote={() => {}} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
