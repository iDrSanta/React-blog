const initialState = {
  isLoaded: false,
  fullArticle: {},
};

const fullArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FULL_ARTICLE':
      return { ...state, fullArticle: action.payload };

    case 'SET_IS_LOADED':
      return {
        ...state,
        isLoaded: !state.isLoaded,
      };

    default:
      return state;
  }
};

export default fullArticleReducer;
