import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import reducer from './Reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware]

const store = createStore(reducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)
export default store;
