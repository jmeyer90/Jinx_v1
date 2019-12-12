import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../../actions/business_actions";

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      debugger
      const businesses = Object.values( action.businesses );
      businesses.forEach( business => {
        debugger
        newState[business.id] = business;
      });
      return newState;
    case RECEIVE_BUSINESS:
      debugger
      newState = { [action.business.id]: action.business };
      debugger
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default BusinessesReducer;