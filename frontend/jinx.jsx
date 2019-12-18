import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchBusiness, fetchBusinesses } from './actions/business_actions';

document.addEventListener('DOMContentLoaded', ()=>{

  let preloadedState;

  if (window.current_user) {
    preloadedState = {
      entities: {
        users: {
          [window.current_user.id]: window.current_user
        },
        businesses:{}
      },
      session: {
        currentUserId: window.current_user.id
      },
    };
  } else {
    preloadedState = {
      entities: {
        businesses: {}
      }
    }
  }

  const store = configureStore( preloadedState );

  // testing purposes
  window.getState = store.getState;
  window.fetchBusinesses = fetchBusinesses;
  window.fetchBusiness = fetchBusiness;
  // end of testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})