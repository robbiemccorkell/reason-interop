const baseUrl = 'https://serverless-api.hackernewsmobile.com';

export const getTopStories = async (page = 0, count = 25) => {
  const response = await fetch(`${baseUrl}/topstories-${count}-${page}.json`);
  return response.json();
};
