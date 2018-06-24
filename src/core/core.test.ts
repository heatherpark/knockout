import 'mocha';
import { expect } from 'chai';

import { next, setEntries, vote } from './core';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = {
        entries: [],
        vote: {
          pair: [],
          tally: {}
        }
      };
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
      const state = {
        entries: ['Germany', 'Spain', 'England'],
        vote: {
          pair: [],
          tally: {}
        }
      };
      const nextState = next(state);

      expect(nextState).to.deep.equal({
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {}
        },
        entries: ['England']
      });
    });
  });

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {}
        },
        entries: []
      };
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
      const state = {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: {
            'Germany': 3,
            'Spain': 2
          }
        },
        entries: []
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