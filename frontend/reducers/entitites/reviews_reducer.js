import { RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../../actions/review_actions';

const ReviewsReducer = (state={}, action) =>{
  Object.freeze( state );
  let newState={};
  switch( action.type ){
    case RECEIVE_REVIEWS:
      debugger
      const reviews = Object.values(action.reviews);
      debugger
      reviews.forEach( review =>(
        newState[review.id] = review
      ))
      debugger
      return newState;
    case RECEIVE_REVIEW:
      newState = {[action.review.id]: action.review}
    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId]
      return newState;
    default:
      return state;
  }
}

export default ReviewsReducer;