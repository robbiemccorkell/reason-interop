import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = ({getState, dispatch}) => <div>{getState().greeting}</div>;

ReactDOM.render(<App getState={store.getState} dispatch={store.dispatch} />, document.getElementById('index'));
