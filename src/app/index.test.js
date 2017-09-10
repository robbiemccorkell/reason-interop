import React from 'react';
import { shallow } from 'enzyme';
import AppWrapper from './';

describe('App component wrapper', () => {
  it('passes correct props to component', () => {
    const stories = [];
    const store = {
      subscribe() {},
      dispatch() {},
      getState: () => ({ stories }),
    };

    const result = shallow(<AppWrapper store={store} />);

    expect(result.props().stories).toEqual(stories);
    expect(result.props().getTopStories).toEqual(expect.any(Function));
  });
});
