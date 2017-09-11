import { getTopStories as getApiTopStories } from './api';

export const RECIEVE_TOP_STORIES = 'RECIEVE_TOP_STORIES';

export const receiveTopStories = stories => ({
  type: RECIEVE_TOP_STORIES,
  payload: {
    stories,
  },
});

export const getTopStories = () => async (dispatch) => {
  const topStories = await getApiTopStories();

  dispatch(receiveTopStories(topStories));
};
