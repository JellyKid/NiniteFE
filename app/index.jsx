import React from 'react';
import { render } from 'react-dom';
import { Provider , connect} from 'react-redux';
import { findADComputers, updateFoundComputers } from './actions';

import App from './components/App';

import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
