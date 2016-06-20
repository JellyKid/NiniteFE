import React from 'react';
import { render } from 'react-dom';
import { Provider , connect} from 'react-redux';
import { findADComputers, updateFoundComputers } from './actions';

import App from './components/App';

import makeStore from './store';
const store = makeStore();

import io from 'socket.io-client';
const socket = io('http://127.0.0.1:8090');

socket.on('found', found =>
  store.dispatch(updateFoundComputers(found))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

store.dispatch(findADComputers(socket));
