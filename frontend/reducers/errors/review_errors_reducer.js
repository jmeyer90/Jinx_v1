import { REVIEW_ERRORS } from '../../actions/review_actions';

const nullState = [];

const ReviewReducer = (state = nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case REVIEW_ERRORS:
      let newState = action.errors;
      debugger
      return newState;
    default:
      return nullState;
  }
};

export default ReviewReducer;