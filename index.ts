import makeStore from './src/store';
import startServer from './src/server';

import entries from './entries';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: 'SET_ENTRIES',
  entries
});

store.dispatch({ type: 'NEXT' });