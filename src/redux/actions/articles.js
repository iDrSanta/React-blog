import axios from 'axios';

export const setIsLoaded = () => ({
  type: 'SET_IS_LOADED',
});

export const setArticles = (items) => ({
  type: 'SET_ARTICLES',
  payload: items,
});
export const fetchArticle = () => async (dispatch) => {
  dispatch(setIsLoaded());
  const { data } = await axios.get(`http://localhost:3001/articles`);

  dispatch(setArticles(data));
  dispatch(setIsLoaded());
};

export const addArticle = (obj) => ({
  type: 'ADD_ARTICLE',
  payload: obj,
});

export const publishArticle = (obj) => async (dispatch) => {
  dispatch(setIsLoaded);
  const { data } = await axios.post(`http://localhost:3001/articles`, obj);
  console.log(data);
  dispatch(addArticle(data));
};

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  payload: id,
});

export const fetchRemoveArticle = (id) => async (dispatch) => {
  console.log(id);
  await axios.delete(`http://localhost:3001/articles/${id}`);

  dispatch(removeArticle(id));
};
