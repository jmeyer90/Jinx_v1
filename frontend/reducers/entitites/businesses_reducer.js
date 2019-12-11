import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../../actions/business_actions";

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      newState = action.bussinesses;
      return newState;
    case RECEIVE_BUSINESS:
      newState = { [action.bussiness.id]: action.bussiness };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default BusinessesReducer;