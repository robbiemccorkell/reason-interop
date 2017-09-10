import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {
    getTopStories: PropTypes.func.isRequired,
    stories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
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
        <ul>
          {stories.map(({ id, title, url }) => (
            <li key={id}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
