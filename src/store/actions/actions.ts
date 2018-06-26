import * as actionTypes from './actionTypes';

export const setState = state => ({
  state,
  type: actionTypes.SET_STATE
});

export const vote = entry => ({
  entry,
  type: actionTypes.VOTE
});