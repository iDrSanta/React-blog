import axios from 'axios';

export const setComments = (arr) => ({
  type: 'SET_COMMENTS',
  payload: arr,
});

export const fetchComments = (article) => async (dispatch) => {
  const { data } = await axios.get(
    `https://61b98dee38f69a0017ce60f1.mockapi.io/articles/${article}/comments`,
  );

  dispatch(setComments(data));
};

export const addComment = (obj) => ({
  type: 'ADD_COMMENT',
  payload: obj,
});

export const fetchSendComment = (article, obj) => async (dispatch) => {
  await axios.post(`https://61b98dee38f69a0017ce60f1.mockapi.io/articles/${article}/comments`, obj);
  dispatch(addComment(obj));
};

export const removeComment = (id) => ({
  type: 'REMOVE_COMMENT',
  payload: id,
});

export const fetchRemoveComments = (article, id) => async (dispatch) => {
  await axios.delete(
    `https://61b98dee38f69a0017ce60f1.mockapi.io/articles/${article}/comments/${id}`,
  );

  dispatch(removeComment(id));
};
