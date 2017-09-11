import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { comp as Header } from '../../lib/js/src/header';

const getStoryUrl = (id, url) =>
  url || `https://news.ycombinator.com/item?id=${id}`;

class App extends Component {
  static propTypes = {
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
    const { stories } = this.props;
    return (
      <div>
        <Header />
        <ul>
          {stories.map(({ id, title, url }) => (
            <li key={id}>
              <a href={getStoryUrl(id, url)}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
