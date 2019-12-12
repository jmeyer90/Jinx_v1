import * as ReviewUtils from '../util/review_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const REVIEW_ERRORS = "REVIEW_ERRORS";

const receiveReviews = reviews => {
  debugger
  return {
    type: RECEIVE_REVIEWS,
    reviews
  }
};

const receiveReview = review => {
  debugger
  return {
    type: RECEIVE_REVIEW,
    review
  }
};

const removeReview = review => {
  debugger
  return {
    type: REMOVE_REVIEW,
  }
};

const reviewErrors = (errors) => {
  debugger
  return {
    type: REVIEW_ERRORS,
    errors
  }
};

export const fetchReviews = businessId => dispatch => {
  debugger
  return (ReviewUtils.fetchReviews( businessId )
    .then(
      reviews => dispatch(receiveReviews(reviews)),
      errors => dispatch(reviewErrors(errors.responseJSON))
    ))
};

export const fetchReview = reviewId => dispatch => {
  debugger
  return (
    ReviewUtils.fetchReview(reviewId)
      .then(
        review => dispatch(receiveReview(review)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}

export const updateReview = review => dispatch =>{
  debugger
  return (
    ReviewUtils.updateReview(review)
    .then(
      review => dispatch(receiveReview(review)),
      errors => dispatch(reviewErrors(errors.responseJSON))
    )
  )
}

export const createReview = review => dispatch => {
  debugger
  return (
    ReviewUtils.createReview(review)
      .then(
        review => dispatch(receiveReview(review)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}

export const deleteReview = reviewId => dispatch => {
  debugger
  return (
    ReviewUtils.deleteReview(reviewId)
      .then(
        reviewId => dispatch(removeReview(reviewId)),
        errors => dispatch(reviewErrors(errors.responseJSON))
      )
  )
}