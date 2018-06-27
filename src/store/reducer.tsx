function vote(state, entry) {
  const currentPair = state.vote.pair;

  if (currentPair && currentPair.includes(entry)) {
    return {
      ...state,
      hasVoted: entry
    }
  } else {
    return state;
  }
}

function setState(currentState, newState) {
  const newPair = newState.vote.pair;

  if (newPair && !newPair.includes(currentState.hasVoted) || !newState.vote.tally) {
    const { hasVoted, ...remainingNewState } = newState;

    return {
      ...remainingNewState
    };
  } else {
    return {
      ...currentState,
      ...newState
    };
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
};

export default reducer;