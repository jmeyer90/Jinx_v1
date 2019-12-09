import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root';

const configureStore = ( preloadedState={} )=>createStore( 
  RootReducer, preloadedState, 
  composeWithDevTools( applyMiddleware( thunk, logger))
);

export default configureStore;