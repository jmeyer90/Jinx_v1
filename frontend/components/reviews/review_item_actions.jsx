import React from 'react';
import ReviewForm from './_review_form';

// props: 
//   business:
//   currentUserId:
//   deleteReview: (reviewId)
//   handleSubmit: (e, action)
//   review: {id, body, rating, business_id, user_id}
//   reviewState: {id, body, rating, reviewsDisp{}}
//   setReviewState: ƒ(review)
//   updateField: ƒ(field)
//   updateReview: (review)

const ReviewItemActions = (props) => {
  if (props.review.user_id === props.currentUserId) {
    props
    return (
      <section className="review-actions">
        <button className="review-actions-button" onClick={() => props.deleteReview(props.review.id)}>Delete Review</button>
        {displayUpdateForm(props)}
      </section>
    )
  } else {
    return (<div></div> )
  }
}

const displayUpdateForm =(props) =>{
  if (props.reviewState.reviewsDisp[props.review.id]) {
    const title = "Update Review";
    const buttonText = "Update Review";
    debugger
    return (
      <section className="update-review">
        {reviewForm(title, buttonText, props)}
        < button className="review-actions-button"
          onClick={() => props.setReviewState({ id: "", body: "", rating: "", reviewsDisp: { [props.review.id]: false } })}>
          Hide
        </button >
      </section>
    )
  } else {
    debugger
    return (
      <button className="review-actions-button"
        onClick={() => props.setReviewState({
          id: props.review.id, body: props.review.body, rating: props.review.rating,
          reviewsDisp: { [props.review.id]: true }
        })}>
        Update Review
        </button>
    )
  }
}

const reviewForm=(title, buttonText, props) => {
  const review = {
    business_id: props.business.id,
    body: props.reviewState.body,
    rating: props.reviewState.rating
  }
  debugger
  return (
    <ReviewForm business={props.business}
      action={props.updateReview} currentUserId={props.currentUserId}
      update={props.updateField} handleSubmit={props.handleSubmit}
      title={title} buttonText={buttonText} review={review} />
  )
}

export default ReviewItemActions;