import reducer from './reducer';

describe('reducer', () => {
  it('handles SET_STATE', () => {
    const initialState = {};
    const action = {
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: { 'Germany': 1 }
        }
      }
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
      type: 'SET_STATE',
      state: {
        vote: {
          pair: ['Germany', 'Spain'],
          tally: { 'Germany': 1 }
        }
      }
    };
    const nextState = reducer(undefined, action);

    expect(nextState).toEqual({
      vote: {
        pair: ['Germany', 'Spain'],
        tally: { 'Germany': 1 }
      }
    })
  });
});