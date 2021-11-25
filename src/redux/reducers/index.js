import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer';
import commentsReducer from './commentsReducer';
import fullArticleReducer from './fullArticle';

const rootReducer = combineReducers({
  articles: articlesReducer,
  comments: commentsReducer,
  fullArticle: fullArticleReducer,
});

export default rootReducer;
