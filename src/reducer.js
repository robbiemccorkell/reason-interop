import { RECEIVE_TOP_STORIES, REQUEST_TOP_STORIES } from './actions';

const initialState = {
  stories: [],
  loaded: false,
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case REQUEST_TOP_STORIES:
      return {
        ...state,
        stories: action.payload.stories,
        loaded: false,
      };
    case RECEIVE_TOP_STORIES:
      return {
        ...state,
        stories: action.payload.stories,
        loaded: true,
      };
    default:
      return state;
  }
};
