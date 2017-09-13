import { getTopStories as getApiTopStories } from './api';

export const RECEIVE_TOP_STORIES = 'RECEIVE_TOP_STORIES';

export const receiveTopStories = stories => ({
  type: RECEIVE_TOP_STORIES,
  payload: {
    stories,
  },
});

export const getTopStories = () => async (dispatch) => {
  const topStories = await getApiTopStories();

  dispatch(receiveTopStories(topStories));
};
