import { getTopStories as getApiTopStories } from './api';

export const RECEIVE_TOP_STORIES = 'RECEIVE_TOP_STORIES';
export const REQUEST_TOP_STORIES = 'REQUEST_TOP_STORIES';

export const requestTopStories = () => ({
  type: REQUEST_TOP_STORIES,
  payload: {},
});

export const receiveTopStories = stories => ({
  type: RECEIVE_TOP_STORIES,
  payload: {
    stories,
  },
});

export const getTopStories = () => async (dispatch) => {
  await dispatch(requestTopStories());

  const topStories = await getApiTopStories();

  return dispatch(receiveTopStories(topStories));
};
