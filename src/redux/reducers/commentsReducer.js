const initialState = { isLoaded: false, items: [] };

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COMMENTS':
      return { ...state, items: action.payload };
    case 'ADD_COMMENT':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_COMMENT':
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

export default commentsReducer;
