import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_BUSINESS } from '../../actions/business_actions';

const UsersReducer = ( state={}, action ) => {
  Object.freeze( state );
  let newState;
  switch( action.type ){
    case RECEIVE_BUSINESS:
      newState = action.users;
      debugger
      return newState;
    case RECEIVE_USER:
      newState = {[action.user.id]: action.user};
      return Object.assign({}, state, newState );
    default:
      return state;
  }
}

export default UsersReducer;