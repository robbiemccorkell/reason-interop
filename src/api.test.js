import { getTopStoryIds, getTopStoryById } from './api';

describe('getTopStoryIds', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
      }),
    );
  });

  it('returns first 10 ids from api', async () => {
    const ids = await getTopStoryIds();

    expect(ids.length).toEqual(10);
  });

  it('returns specified number of ids from api', async () => {
    const ids = await getTopStoryIds(12);

    expect(ids.length).toEqual(12);
  });
});

describe('getTopStoryById', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(url =>
      Promise.resolve({
        json: () => Promise.resolve({ url }),
      }),
    );
  });

  it('returns story for id', async () => {
    const story = await getTopStoryById(15);

    expect(story).toBeDefined();
    expect(story.url).toContain(15);
  });
});
