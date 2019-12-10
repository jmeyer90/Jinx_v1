import { RECEIVE_ERRORS } from '../../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      let newState = action.errors;
      return newState;
    default:
      return state;
  }
};

export default UsersReducer;