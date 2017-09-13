import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer as rootReducer } from '../lib/js/src/reducer';
import App from './app';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App getState={store.getState} dispatch={store.dispatch} />
  </Provider>,
  document.getElementById('index'),
);
