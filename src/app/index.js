import { connect } from 'react-redux';
import App from './component';
import { getTopStories } from '../actions';

const mapStateToProps = state => ({
  stories: state.stories,
});

const mapDispatchToProps = {
  getTopStories,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
