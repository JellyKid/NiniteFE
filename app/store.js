import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import createLogger from 'redux-logger';

const logger = createLogger();

export default function makeStore() {
  return createStore(
    reducer,
    applyMiddleware(thunk, logger)
  );
}
