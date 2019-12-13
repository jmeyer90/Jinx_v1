import * as ReviewUtils from '../util/review_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const REVIEW_ERRORS = "REVIEW_ERRORS";

const receiveReviews = reviews => {
  
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
};

const receiveReview = review => {
  
  return {
    type: RECEIVE_REVIEW,
    review
  }
};

const removeReview = review => {
  
  return {
    type: REMOVE_REVIEW,
  }
};

const reviewErrors = (errors) => {
  
  return {
    type: REVIEW_ERRORS,
    errors
  }
};

export const fetchReviews = businessId => dispatch => {
  
  return (ReviewUtils.fetchReviews( businessId )
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      errors => dispatch(reviewErrors(errors.responseJSON))
    ))
};

export const fetchReview = reviewId => dispatch => {
  
  return (
    ReviewUtils.fetchReview(reviewId)
      .then(
        review => dispatch(receiveReview(review)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}

export const updateReview = review => dispatch =>{
  
  return (
    ReviewUtils.updateReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(reviewErrors(errors.responseJSON))
    )
  )
}

export const createReview = review => dispatch => {
  
  return (
    ReviewUtils.createReview(review)
      .then(
        review => dispatch(receiveReview(review)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}

export const deleteReview = reviewId => dispatch => {
  
  return (
    ReviewUtils.deleteReview(reviewId)
      .then(
        reviewId => dispatch(removeReview(reviewId)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}