import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../../actions/business_actions";
import { RECEIVE_REVIEWS } from '../../actions/review_actions';
import { RECEIVE_USERS } from '../../actions/user_actions';

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_BUSINESSES:
      const businesses = Object.values( action.businesses );
      businesses.forEach( business => {
        newState[business.id] = business;
      });
      return newState;
    case RECEIVE_BUSINESS:
      newState = { [action.business.id]: action.business };

      debugger
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default BusinessesReducer;