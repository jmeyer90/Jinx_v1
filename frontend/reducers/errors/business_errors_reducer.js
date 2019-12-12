import { BUSINESS_ERRORS } from '../../actions/business_actions';

const nullState = [];

const BusinessReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case BUSINESS_ERRORS:
      let newState = action.errors;
      debugger
      return newState;
    default:
      return nullState;
  }
};

export default BusinessReducer;