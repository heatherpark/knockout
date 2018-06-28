import * as actionTypes from './actionTypes';
import { EntriesState, INITIAL_STATE, 
  setEntries, next, vote } from './core';

export default function reducer(
  state: EntriesState = INITIAL_STATE, 
  action
): {} {
  switch (action.type) {
    case actionTypes.SET_ENTRIES:
      return setEntries(state, action.entries);
    case actionTypes.NEXT:
      return next(state);
    case actionTypes.VOTE:
      return {
        ...state,
        vote: vote(state.vote, action.entry)
      };
    default:
      return state;
  }
}