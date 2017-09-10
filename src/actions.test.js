import { receiveTopStories, getTopStories } from './actions';

jest.mock('./api', () => ({
  getTopStoryIds: () => [1],
  getTopStoryById: id => ({
    id,
  }),
}));

describe('receiveTopStories', () => {
  it('returns stories in payload', () => {
    const stories = [{ id: 1 }];
    const action = receiveTopStories(stories);

    expect(action.payload.stories).toEqual(stories);
  });
});

describe('getTopStories', () => {
  it('dispatches action with stories', async () => {
    const mockDispatch = jest.fn();

    await getTopStories()(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(receiveTopStories([{ id: 1 }]));
  });
});
