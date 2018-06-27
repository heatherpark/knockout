import { expect } from 'chai';
import 'mocha';

import { INITIAL_STATE } from './core';
import makeStore from './store';

describe('store', () => {
  it('is a Redux store configured with the correct reducer', () => {
    const store = makeStore();
    expect(store.getState()).to.deep.equal(INITIAL_STATE);

    store.dispatch({
      type: 'SET_ENTRIES',
      entries: ['Germany', 'Spain']
    });

    const expectedState = {
      ...INITIAL_STATE,
      entries: ['Germany', 'Spain']
    };

    expect(store.getState()).to.deep.equal(expectedState);
  });
});