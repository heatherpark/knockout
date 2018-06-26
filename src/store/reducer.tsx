const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...state,
        ...action.state
      };
    default:
      return state;
  }
};

export default reducer;