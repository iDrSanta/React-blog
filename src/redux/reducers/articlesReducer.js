const initialState = {
  isLoaded: false,
  items: [],
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return { ...state, items: action.payload };
    case 'ADD_ARTICLE':
      // const lastId = state.items.length ? state.items[state.items.length - 1] + 1 : 1;
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
      };

    case 'REMOVE_ARTICLE':
      return {
        ...state,
        items: state.items.filter((obj) => obj.id !== action.payload),
      };

    case 'SET_IS_LOADED':
      return {
        ...state,
        isLoaded: !state.isLoaded,
      };

    default:
      return state;
  }
};
export default articlesReducer;
