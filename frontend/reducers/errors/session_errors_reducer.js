import { SESSION_ERRORS } from '../../actions/session_actions';

const nullState = [];

const SessionReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SESSION_ERRORS:
      let newState = action.errors;
      return newState;
    default:
      return nullState;
  }
};

export default SessionReducer;