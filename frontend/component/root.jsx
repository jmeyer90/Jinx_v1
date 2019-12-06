import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = { store } => (
  <HashRouter>
    <Provider store={store}>
      <h1>Root</h1>
    </Provider>
  </HashRouter>
);

export default Root;