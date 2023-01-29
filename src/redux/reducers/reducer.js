const initialState = {
  allCards: [],
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CARDS_REQUEST':
      return {
        ...state,
        isLoading: true
      };
    case 'FETCH_ALL_CARDS_SUCCESS':
      return {
        ...state,
        allCards: action.payload,
        isLoading: false
      };
    case 'FETCH_ALL_CARDS_FAILURE':
      return {
        ...state,
        error: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;