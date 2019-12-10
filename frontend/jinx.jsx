import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { createUser } from './actions/user_actions';
import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', ()=>{

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUserId: window.currentUser.id
      }
    };
  }
  const store = configureStore( preloadedState );

  // testing purposes
  window.login = login;
  window.createUser = createUser;
  window.getState = store.getState;
  // end of testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
}); 