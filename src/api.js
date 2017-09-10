export const getTopStoryIds = async (count = 10) => {
  const response = await fetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
  );
  const ids = await response.json();
  return ids.slice(0, count);
};

export const getTopStoryById = async id => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );
  return await response.json();
}
