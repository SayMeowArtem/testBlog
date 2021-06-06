export const LoadPostsActionCreator = (payload) => ({
  type: 'LOAD_POST',
  payload,
});

export const isPostLoadedActionCreator = () => ({
  type: 'POST_LOADED',
});

export const addPostActionCreator = (payload) => ({
  type: 'ADD_POST',
  payload,
});
