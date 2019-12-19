import { LOGIN_USER, LOGOUT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BUSINESS } from '../actions/business_actions';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch( action.type ){
    case LOGIN_USER:
      newState = { currentUserId: action.userId }
      return newState;
    case RECEIVE_USER:
      newState = { currentUserId: action.user.id }
      return newState;
    case LOGOUT_USER:
      newState = { currentUserId: null };
      return newState;
    case RECEIVE_BUSINESS:
      newState = { currentBusinessId: action.business.id}

      return Object.assign({}, state, newState)
    default:
      return state;
  }
}

export default SessionReducer;