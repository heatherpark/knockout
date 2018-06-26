function vote(state, entry) {
  const currentPair = state.vote.pair;

  if (currentPair && currentPair[entry]) {
    return {
      ...state,
      hasVoted: entry
    }
  } else {
    return state;
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        ...action.state
      };
    case 'VOTE':
      return vote(state, action.entry);
    default:
      return state;
  }
};

export default reducer;