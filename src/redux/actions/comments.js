import axios from 'axios';

export const setComments = (arr) => ({
  type: 'SET_COMMENTS',
  payload: arr,
});

export const fetchComments = () => async (dispatch) => {
  const { data } = await axios.get(`https://618dc902fe09aa001744089a.mockapi.io/comment`);

  dispatch(setComments(data));
};

export const addComment = (obj) => ({
  type: 'ADD_COMMENT',
  payload: obj,
});

export const fetchRemoveComments = (id) => async (dispatch) => {
  await axios.delete(`https://618dc902fe09aa001744089a.mockapi.io/comment/${id}`);

  dispatch(removeComment(id));
};

export const removeComment = (id) => ({
  type: 'REMOVE_COMMENT',
  payload: id,
});

export const fetchRemoveComments = (id) => async (dispatch) => {
  await axios.delete(`https://618dc902fe09aa001744089a.mockapi.io/comment/${id}`);

  dispatch(removeComment(id));
};
