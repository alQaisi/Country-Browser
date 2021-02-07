import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {uiReducer,dataReducer} from './reducers';
import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
// const logger=createLogger();
const rootReducer=combineReducers({uiReducer,dataReducer})
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));
ReactDOM.render(
    <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
