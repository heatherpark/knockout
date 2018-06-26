import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import * as io from 'socket.io-client';
import registerServiceWorker from './registerServiceWorker';

import { setState } from './store/actions/actions';
import reducer from './store/reducer';

import App from './App';

const store = createStore(
  reducer,
  devToolsEnhancer({})
);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => {
  store.dispatch(setState(state))
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
