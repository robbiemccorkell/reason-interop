import { RECIEVE_TOP_STORIES } from './actions';

const initialState = {
  stories: [],
};

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case RECIEVE_TOP_STORIES:
      return {
        ...state,
        stories: action.payload.stories,
      };
    default:
      return state;
  }
};
