import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './reducer';
import sagas from './sagas';

const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(saga)
);

saga.run(sagas);
export default store;
