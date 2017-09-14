import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { comp as Header } from '../header.re';

const getStoryUrl = (id, url) =>
  url || `https://news.ycombinator.com/item?id=${id}`;

class App extends Component {
  static propTypes = {
    loaded: PropTypes.bool.isRequired,
    getTopStories: PropTypes.func.isRequired,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string,
      }),
    ).isRequired,
  };

  componentDidMount() {
    this.props.getTopStories();
  }

  render() {
    const { stories, loaded } = this.props;
    return (
      <div>
        <Header>{'Reason React Hacker News'}</Header>
        {loaded ?
          <ul>
            {stories.map(({ id, title, url }) => (
              <li key={id}>
                <a href={getStoryUrl(id, url)}>{title}</a>
              </li>
            ))}
          </ul> :
          'Loading...'
        }
      </div>
    );
  }
}

export default App;
