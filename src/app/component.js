import React, { Component } from 'react';

class App extends Component {
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
