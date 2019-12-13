import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../../actions/business_actions";
import { extractAsObj } from '../../util/reducer utils';

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
      // take out users and reveiws, activate extractAsObj
      const reviews = extractAsObj( newState.business, reviews );
      const users = extractAsObj( newState.business, users )

      // turn each into a POJO action, dispatch with type RECEVIE_REVIEWS, REVECEIVE_USERS
      debugger
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}

export default BusinessesReducer;