import 'mocha';
import { expect } from 'chai';

import { next, setEntries, vote } from './core';

describe('application logic', () => {
  let state;

  beforeEach(() => {
    state = {
      entries: [],
      vote: {
        pair: [],
        tally: {}
      }
    };
  });

  afterEach(() => {
    state = {
      entries: [],
      vote: {
        pair: [],
        tally: {}
      }
    };
  });

  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const entries = ['Germany', 'Spain'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.deep.equal({
        entries: ['Germany', 'Spain'],
        vote: {
          pair: [],
          tally: {}
        }
      });
    });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      state.entries = ['Germany', 'Spain', 'England'];
      const nextState = next(state);

      expect(nextState).to.deep.equal({
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {}
        },
        entries: ['England']
      });
    });

    it('puts winner of current vote back to entries', () => {
    });
  });

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      state.vote.pair = ['Germany', 'Spain'];
      const nextState = vote(state, 'Germany');

      expect(nextState).to.deep.equal({
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {
            'Germany': 1
          }
        },
        entries: []
      });
    });

    it('adds to exsting tally for the voted entry', () => {
      state.vote = {
        pair: ['Germany', 'Spain'],
        tally: {
          'Germany': 3,
          'Spain': 2
        }
      };
      const nextState = vote(state, 'Germany');

      expect(nextState).to.deep.equal({
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {
            'Germany': 4,
            'Spain': 2
          }
        },
        entries: []
      });
    });
  });
});