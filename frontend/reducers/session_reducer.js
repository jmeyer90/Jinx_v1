import { LOGIN_USER, LOGOUT_USER } from "../actions/session_actions";

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch( action.type ){
    case LOGIN_USER:
      newState = {currentUserId: action.user }
      return newState;
    case LOGOUT_USER:
      newState = null;
      return newState;
    default:
      return state;
  }
}

export default SessionReducer;