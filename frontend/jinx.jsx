import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { createUser } from './actions/user_actions';
import { login } from './actions/session_actions';
import { logout } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', ()=>{

  let preloadedState = undefined;
  if (window.current_user) {
    preloadedState = {
      entities: {
        users: {
          [window.current_user.id]: window.current_user
        },
      },
      session: {
        currentUserId: window.current_user.id
      },
    };
  }
  const store = configureStore( preloadedState );

  // testing purposes
  window.login = login;
  window.logout = logout;
  window.createUser = createUser;
  window.getState = store.getState;
  // end of testing

  debugger

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
}); 