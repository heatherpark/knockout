import 'mocha';
import { expect } from 'chai';

import { EntriesState, INITIAL_ENTRIES_STATE, next, setEntries, vote } from './core';

describe('application logic', () => {
  let state;
  let expectedState: EntriesState; 

  beforeEach(() => {
    state = {...INITIAL_ENTRIES_STATE};
  });

  afterEach(() => {
    state = {...INITIAL_ENTRIES_STATE};
  });

  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const entries = ['Germany', 'Spain'];
      state.entries = entries;
      expectedState = {
        ...state,
        entries: ['Germany', 'Spain']
      };

      const nextState = setEntries(state, entries);

      expect(nextState).to.deep.equal(expectedState);
    });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      state.entries = ['Germany', 'Spain', 'England'];
      expectedState = {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {}
        },
        entries: ['England']
      };

      const nextState = next(state);

      expect(nextState).to.deep.equal(expectedState);
    });

    it('puts winner of current vote back to entries', () => {
      state.vote = {
        pair: ['Germany', 'Spain'],
        tally: {
          'Germany': 4,
          'Spain': 2
        }
      };
      state.entries = ['England', 'Russia', 'Japan'];
      expectedState = {
        vote: {
          pair: ['England', 'Russia'],
          tally: {}
        },
        entries: ['Japan', 'Germany']
      };

      const nextState = next(state);

      expect(nextState).to.deep.equal(expectedState); 
    });

    it('puts both from tied vote back to entries', () => {
      state.vote = {
        pair: ['Germany', 'Spain'],
        tally: {
          'Germany': 3,
          'Spain': 3
        }
      };
      state.entries = ['Russia', 'Japan', 'Egypt'];
      expectedState = {
        vote: {
          pair: ['Russia', 'Japan'],
          tally: {}
        },
        entries: ['Egypt', 'Germany', 'Spain']
      };

      const nextState = next(state);

      expect(nextState).to.deep.equal(expectedState);
    });

    it('marks winner when just one entry left', () => {
      state.vote = {
        pair: ['Germany', 'Spain'],
        tally: {
          'Germany': 4,
          'Spain': 2
        }
      };
      expectedState = { 
        ...INITIAL_ENTRIES_STATE,
        winner: 'Germany'
      };
      const nextState = next(state);

      expect(nextState).to.deep.equal(expectedState);
    });
  });

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      state.vote.pair = ['Germany', 'Spain'];
      expectedState = {
        ...state,
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {
            'Germany': 1
          }
        }
      };

      const nextState = vote(state, 'Germany');

      expect(nextState).to.deep.equal(expectedState);
    });

    it('adds to existing tally for the voted entry', () => {
      state.vote = {
        pair: ['Germany', 'Spain'],
        tally: {
          'Germany': 3,
          'Spain': 2
        }
      };
      const expectedState = {
        ...state,
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {
            'Germany': 4,
            'Spain': 2
          }
        }
      };

      const nextState = vote(state, 'Germany');

      expect(nextState).to.deep.equal(expectedState);
    });
  });
});