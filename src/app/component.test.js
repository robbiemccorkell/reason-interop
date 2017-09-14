import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './component';

describe('App component', () => {
  it('renders stories', () => {
    const stories = [{ id: 1, title: 'New phones', url: 'apple.com' }];
    const getTopStories = () => {};

    const result = shallow(
      <App stories={stories} loaded getTopStories={getTopStories} />,
    );

    expect(toJson(result)).toMatchSnapshot();
  });

  it('renders loading message when not loaded', () => {
    const getTopStories = () => {};

    const result = shallow(
      <App stories={[]} loaded={false} getTopStories={getTopStories} />,
    );

    expect(toJson(result)).toMatchSnapshot();
  });


  it('renders stories', () => {
    const stories = [
      { id: 1, title: 'New phones', url: 'apple.com' },
      { id: 2, title: 'I hate everything', url: 'medium.com' },
    ];
    const getTopStories = () => {};

    const result = shallow(
      <App stories={stories} loaded getTopStories={getTopStories} />,
    );

    expect(result.find('ul').children().length).toEqual(stories.length);
  });

  it('fetches dependancies on mount', () => {
    const stories = [];
    const getTopStories = jest.fn();

    shallow(
      <App stories={stories} loaded getTopStories={getTopStories} />,
      { lifecycleExperimental: true },
    );

    expect(getTopStories).toHaveBeenCalled();
  });
});
