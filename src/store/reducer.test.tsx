import reducer from './reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = {};
    const action = {
      state: {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: { 'Germany': 1 }
        }
      },
      type: 'SET_STATE'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual({
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    });
  });

  it('handles SET_STATE without initial state', () => {
    const action = {
      state: {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: { 'Germany': 1 }
        }
      },
      type: 'SET_STATE'
    };
    const nextState = reducer(undefined, action);

    expect(nextState).toEqual({
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    })
  });

  it('handles VOTE by setting hasVoted', () => {
    const state = {
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    };
    const action = {
      entry: 'Germany',
      type: 'VOTE'
    };
    const nextState = reducer(state, action);

    expect(nextState).toEqual({
      hasVoted: 'Germany',
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    });
  });

  it('does not set hasVoted for VOTE on invalid entry', () => {
    const state = {
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    };
    const action = {
      entry: 'Russia',
      type: 'VOTE'
    };
    const nextState = reducer(state, action);

    expect(nextState).toEqual({
      hasVoted: 'Germany',
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    });
  });
});