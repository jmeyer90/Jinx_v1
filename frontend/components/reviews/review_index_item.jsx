import React from 'react';
import ReviewForm from './_review_form';
import { displayRating } from '../../util/display_util';

// props: 
//   user:
//   business:
//   currentUserId:
//   deleteReview: (reviewId)
//   handleSubmit: (e, action)
//   review: {id, body, rating, business_id, user_id}
//   reviewState: {id, body, rating, reviewsDisp{}}
//   setReviewState: ƒ(review)
//   updateField: ƒ(field)
//   updateReview: (review)

const ReviewIndexItem = props =>{
  return(
    <li key={props.review.id} className="business-review-item">
        <section className="user-info">
          <span className="username">{props.user.f_name} {props.user.l_name}</span>
          <figure key={props.user.id} className="profile-img">User</figure>
        </section>
        <span className="review-item-details"> 
        {/* conditionally render.update form here in place of this.Use reviewsDisp */}
          <section className="user-rating-container">
            {displayRating( props.review.rating )}
          </section> 
          <p className="review-body">{props.review.body}</p>
        </span>
        {ReviewItemActions(props)}
    </li>
  )
}

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
    const buttonText = "Update Review";
    debugger
    return (
      <section className="update-review">
        {reviewForm(buttonText, props)}
        < button className="review-actions-button"
        // Instead of setting state, just go straight to reviewForm. Only change state on submit
        // onChange, update actualreview
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

const reviewForm = (buttonText, props) => {
  const htmlClass = "update";
  const review = {
    business_id: props.business.id,
    // body: props.reviewState.body,
    rating: props.reviewState.rating
  }
  debugger
  return (
    <ReviewForm business={props.business}
      action={props.updateReview} currentUserId={props.currentUserId}
      update={props.updateField} handleSubmit={props.handleSubmit}
      buttonText={buttonText} review={review} htmlClass={htmlClass}/>
  )
}

export default ReviewIndexItem;