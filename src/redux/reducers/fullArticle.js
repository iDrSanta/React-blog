const initialState = {
  isLoaded: false,
  fullArticle: {},
};

 const fullArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FULL_ARTICLE':
      return {...state, fullArticle: action.payload}

    default:
      return state;
  }
};

export default fullArticleReducer