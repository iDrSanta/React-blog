export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  payload: id,
});

export const addArticle = (item) => ({
  type: 'ADD_ARTICLE',
  payload: item,
});
