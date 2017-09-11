import { getTopStories } from './api';

describe('getTopStories', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(url =>
      Promise.resolve({
        json: () =>
          Promise.resolve(
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(id => ({ id, url })),
          ),
      }),
    );
  });

  it('requests 25 items from page 0 by default', async () => {
    const stories = await getTopStories();

    expect(stories[0].url).toContain('25-0');
  });

  it('requests 25 items from given page', async () => {
    const stories = await getTopStories(2);

    expect(stories[0].url).toContain('25-2');
  });

  it('requests given items from given page', async () => {
    const stories = await getTopStories(2, 10);

    expect(stories[0].url).toContain('10-2');
  });
});
