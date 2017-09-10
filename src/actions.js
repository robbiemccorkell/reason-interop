import { getTopStoryIds, getTopStoryById } from './api';

export const RECIEVE_TOP_STORIES = 'RECIEVE_TOP_STORIES';

export const receiveTopStories = stories => {
  return {
    type: RECIEVE_TOP_STORIES,
    payload: {
      stories,
    },
  };
};

export const getTopStories = () => async dispatch => {
  const topStoryIds = await getTopStoryIds();
  const topStories = await Promise.all(topStoryIds.map(getTopStoryById));

  dispatch(receiveTopStories(topStories));
};
