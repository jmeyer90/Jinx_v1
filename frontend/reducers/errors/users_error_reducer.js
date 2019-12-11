import { USER_ERRORS } from '../../actions/user_actions';

const nullState = [];

const UsersReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case USER_ERRORS:
      let newState = action.errors;
      return newState;
    default:
      return nullState;
  }
};

export default UsersReducer;