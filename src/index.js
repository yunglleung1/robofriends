import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './containers/App'
import {Provider} from 'react-redux';
import {searchRobots, requestRobots} from './reducers'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const rootReducer = combineReducers({
  searchRobots: searchRobots,
  requestRobots: requestRobots
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));//for multiple reducers

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'));
serviceWorker.unregister();
