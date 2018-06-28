import makeStore from './src/store';
import startServer from './src/server';

import * as actionTypes from './src/actionTypes';
import entries from './entries';

export const store = makeStore();
startServer(store);

store.dispatch({
  type: actionTypes.SET_ENTRIES,
  entries
});

store.dispatch({ type: actionTypes.NEXT });