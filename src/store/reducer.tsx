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

function resetVote(currentState, nextState) {
  const hasVoted = currentState.hasVoted;
  const nextPair = nextState.vote && nextState.vote.pair;
  
  if (hasVoted && !nextPair.includes(hasVoted)) {
    return {
      vote: nextState.vote
    }
  } else {
    return nextState;
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return resetVote(state, action.state);
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
};

export default reducer;