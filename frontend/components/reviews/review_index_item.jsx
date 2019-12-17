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
//   resetState: ()

const ReviewIndexItem = props =>{
  debugger
  return(
    <li key={props.review.id} className="business-review-item">
        <section className="user-info">
        <figure key={props.user.id} className="profile-img">User</figure>
        <span className="username">{props.user.f_name} {props.user.l_name}</span>
          <img src={props.review.photo} alt="cauldron"/>
        </section>
        {ReviewItemActions(props)}
    </li>
  )
}

const ReviewItemActions = (props) => {
  if (props.review.user_id === props.currentUserId) {
    props
    return (
      <section className="review-actions">
        {displayUpdateForm(props)}
      </section>
    )
  } else {
    return (
      <section className="display-review">
        <span className="review-item-details">
          <section className="user-rating-container">
            {displayRating(props.review.rating)}
          </section>
          <p className="review-body">{props.review.body}</p>
        </span>
      </section> 
    )
  }
}

const displayUpdateForm =(props) =>{
  if (props.reviewState.reviewsDisp[props.review.id]) {
    const buttonText = "Update Review";
    debugger
    return (
      <section className="update-review">
        {reviewForm(buttonText, props)}
      </section>
    )
  } else {
    debugger
    return (
      <section className="display-review">
        <span className="review-item-details">
          <section className="user-rating-container">
            {displayRating(props.review.rating)}
          </section>
          <p className="review-body">{props.review.body}</p>
        </span>
        <section className="review-index-button-container">
          <button className="review-actions-button"
            onClick={() => props.setReviewState({
              id: props.review.id, body: props.review.body, rating: props.review.rating,
              reviewsDisp: { [props.review.id]: true }
            })}>
            Update Review
          </button>
          <button className="review-actions-button" onClick={() => props.deleteReview(props.review.id)}>
            Delete Review
          </button>
        </section>
      </section>
    )
  }
}

const reviewForm = (buttonText, props) => {
  const htmlClass = "update";
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
      buttonText={buttonText} review={review} htmlClass={htmlClass}
      deleteReview={props.deleteReview} resetState={props.resetState} 
      handleFile={props.handleFile}/>
  )
}

export default ReviewIndexItem;