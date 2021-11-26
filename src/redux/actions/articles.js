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
  const { data } = await axios.get(`https://618dc902fe09aa001744089a.mockapi.io/articles`);

  dispatch(setArticles(data));
  dispatch(setIsLoaded());
};

export const addArticle = (obj) => ({
  type: 'ADD_ARTICLE',
  payload: obj,
});

export const publishArticle = (obj) => async (dispatch) => {
  await axios.post(`https://618dc902fe09aa001744089a.mockapi.io/articles`, obj);

  dispatch(addArticle(obj));
};

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  payload: id,
});

export const fetchRemoveArticle = (id) => async (dispatch) => {
  await axios.delete(`https://618dc902fe09aa001744089a.mockapi.io/articles/${id}`);

  dispatch(removeArticle(id));
};
