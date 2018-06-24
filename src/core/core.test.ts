import 'mocha';
import { expect } from 'chai';

import { next, setEntries } from './core';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = {};
      const entries = ['Germany', 'Spain'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.deep.equal({
        entries: ['Germany', 'Spain']
      });
    });
  });

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = {
        entries: ['Germany', 'Spain', 'England']
      };
      const nextState = next(state);

      expect(nextState).to.deep.equal({
        vote: {
          pair: ['Germany', 'Spain']
        },
        entries: ['England']
      });
    });
  });
});