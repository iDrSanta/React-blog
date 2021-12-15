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
  const { data } = await axios.get(
    `https://61b98dee38f69a0017ce60f1.mockapi.io/articles?sortBy=id&order=desc`,
  );

  dispatch(setArticles(data));
  dispatch(setIsLoaded());
};

export const addArticle = (obj) => ({
  type: 'ADD_ARTICLE',
  payload: obj,
});

export const publishArticle = (obj) => async (dispatch) => {
  dispatch(setIsLoaded);
  const { data } = await axios.post(`https://61b98dee38f69a0017ce60f1.mockapi.io/articles`, obj);
  dispatch(addArticle(data));
};

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  payload: id,
});

export const fetchRemoveArticle = (id) => async (dispatch) => {
  await axios.delete(`https://61b98dee38f69a0017ce60f1.mockapi.io/articles/${id}`);

  dispatch(removeArticle(id));
};

export const setSearch = (str) => ({
  type: 'SET_SEARCH',
  payload: str,
});

export const fetchArticlesByCategory = (category) => async (dispatch) => {
  const { data } = await axios.get(
    `https://61b98dee38f69a0017ce60f1.mockapi.io/articles?category=${category}`,
  );

  dispatch(setArticles(data));
};
