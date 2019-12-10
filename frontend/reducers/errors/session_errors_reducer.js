import { RECEIVE_ERRORS } from '../../actions/session_actions';

const SessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      let newState = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;