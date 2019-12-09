import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store })=> {
  return(
    <HashRouter>
      <Provider store={ store }>
        <h1>Root Component redirects to:</h1>
        <App/>
      </Provider>
    </HashRouter>
  )
};

export default Root;