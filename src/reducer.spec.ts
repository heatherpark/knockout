import { expect } from 'chai';
import 'mocha';

import reducer from './reducer';
import { INITIAL_ENTRIES_STATE } from './core/core';

describe('core logic reducer', () => {
  let initialState;
  let expectedState;

  beforeEach(() => {
    initialState = {...INITIAL_ENTRIES_STATE};
  });

  afterEach(() => {
    initialState = {...INITIAL_ENTRIES_STATE};
  });

  it('handles SET_ENTRIES', () => {
    const action = { 
      type: 'SET_ENTRIES', 
      entries: ['Germany']
    };
    expectedState = {
      ...initialState,
      entries: ['Germany']
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles NEXT', () => {
    initialState.entries = ['Germany', 'Spain'];
    const action = { type: 'NEXT' };
    expectedState = {
      ...initialState,
      vote: {
        pair: ['Germany', 'Spain'],
        tally: {}
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expectedState);
  });

  it('handles VOTE', () => {
    initialState.vote = {
      pair: ['Germany', 'Spain'],
      tally: {}
    };
    const action = {
      type: 'VOTE', 
      entry: 'Germany'
    };
    expectedState = {
      ...initialState,
      vote: {
        ...initialState.vote,
        tally: { 'Germany': 1 }
      }
    };

    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(expectedState);
  });
});