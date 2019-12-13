import { RECEIVE_USER } from "../../actions/user_actions";
import { arrayToObject } from '../../util/reducer utils';

const UsersReducer = ( state={}, action ) => {
  Object.freeze( state );
  let newState;
  switch( action.type ){
    case RECEIVE_USER:
      newState = {[action.user.id]: action.user};
      return Object.assign({}, state, newState );
    default:
      return state;
  }
}

export default UsersReducer;