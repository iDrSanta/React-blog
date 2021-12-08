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
    `https://isanta-react-blog.herokuapp.com/articles?_sort=id&_order=desc`,
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
  const { data } = await axios.post(`https://isanta-react-blog.herokuapp.com/articles`, obj);
  console.log(data);
  dispatch(addArticle(data));
};

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  payload: id,
});

export const fetchRemoveArticle = (id) => async (dispatch) => {
  console.log(id);
  await axios.delete(`https://isanta-react-blog.herokuapp.com/articles/${id}`);

  dispatch(removeArticle(id));
};
