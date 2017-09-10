import reducer from './reducer';
import { RECIEVE_TOP_STORIES } from './actions';

describe('reducer', () => {
  it('returns initial state when state is undefined', () => {
    const state = reducer();

    expect(state).toEqual({ stories: [] });
  });

  it('returns current state if action unrecognised', () => {
    const initialState = {
      stories: [{ id: 1 }],
    };
    const state = reducer(initialState, '');

    expect(state).toEqual(initialState);
  });

  it('adds stories to state on RECIEVE_TOP_STORIES', () => {
    const initialState = {
      stories: [{ id: 1 }],
    };
    const newStories = [{ id: 1 }, { id: 2 }];
    const state = reducer(initialState, {
      type: RECIEVE_TOP_STORIES,
      payload: {
        stories: newStories,
      },
    });

    expect(state).toEqual({
      stories: newStories,
    });
  });
});
