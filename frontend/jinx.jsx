import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { createUser } from './actions/user_actions';
import { createSession } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', ()=>{

  // testing purposes
  window.createSession = createSession;
  window.createUser = createUser;
  // end of testing

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUserId: window.currentUser.id
      }
    };
  }


  const store = configureStore( preloadedState );
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
}); 