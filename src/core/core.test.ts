import { setEntries } from './core';
import 'mocha';
import { expect } from 'chai';

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
});