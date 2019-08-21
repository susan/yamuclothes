import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from './Reducers'


const middlewares = [logger]

const store = createStore(reducer, applyMiddleware(...middlewares))

export default store;
