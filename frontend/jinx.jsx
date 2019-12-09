import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore } from './store/store';
import Root from './components/root';

const store = {} // createStore();

document.addEventListener('DOMContentLoaded', ()=>{
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
}); 