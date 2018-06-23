import { List, Map } from 'immutable';
import { expect } from 'chai';

import { setEntries } from '../src/core';

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Germany', 'Spain');
      const nextState = setEntries(state, entries);

      expect(nextState).to.deep.equal(Map({
        entries: List.of('Germany', 'Spain')
      }));
    });
  });
});