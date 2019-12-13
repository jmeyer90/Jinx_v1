import React from 'react';

const reviewItems = (user, review) =>{
  return(
    <li key={review.id} className="business-review-item">
      {user.f_name}'s Review: {review.body}
    </li>
  )
};

const BusinessReviews = (props) =>{
    
  return (
    <section className="business-reviews" >
      {props.business.name} Reviews:
      <ul className="business-review-list" >
        { Object.keys(props.reviews).map( reviewId => {
          let review = props.reviews[reviewId];
          let user = props.users[review.user_id];
          return(
            reviewItems (user, review)
          )}
        )}
      </ul>
    </section >
  )
}

export default BusinessReviews;