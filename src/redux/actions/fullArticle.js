import axios from 'axios';

export const setFullArticle = (item) => ({
  type: 'SET_FULL_ARTICLE',
  payload: item,
});

export const fetchFullArticle = (id) => async (dispatch) => {
  const { data } = await axios.get(`https://618dc902fe09aa001744089a.mockapi.io/articles/${id}`);

  dispatch(setFullArticle(data));
};
