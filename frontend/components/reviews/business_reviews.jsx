import React from 'react';

class BusinessReviews extends React.Component{
  constructor(props){
    super(props);
    this.reviewItems = this.reviewItems.bind(this);
    this.createReview = this.createReview.bind(this);
    this.selectRating = this.selectRating.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(e.currentTarget.value)
  }

  reviewItems = (user, review) => {
    return (
      <li key={review.id} className="business-review-item">
        <h2>{user.f_name}'s Review: </h2>
        <p>Review Body: {review.body}</p>
        {user.f_name}'s Rating: {review.rating}
      </li>
    )
  };

  createReviewForm = () => {
    if (this.props.currentUserId){
      return(
        <section className="create-review">
          <h2>Create a Review:</h2>
          <form OnSubmit={this.handleSubmit()}>
            { this.selectRating()}
            <textarea calssName="review-textarea" placeholder="Sample Review Body" />
            <input type="submit" value="Post Review"/>
          </form>
        </section>
      )
    } else {
      return( <div></div> )
    }
  }

  selectRating = () => {
    const ratings = [];
    for (let i = 0; i <= 5; i++) {
      ratings.push(i);
    }

    return (
      <ul className="ratings-selection">
        {ratings.map(rating => (
          <li className="rating-opt">
            <input className="rating-option" type="radio" value={rating} name={this.props.review.rating} />
          </li>
        ))}
      </ul>
    )
  }

  render(){    
    return (
      <section className="business-reviews" >
        { this.createReviewForm() }
        <h2>{this.props.business.name} Reviews:</h2>
        <ul className="business-review-list" >
          { Object.keys(this.props.reviews).map( reviewId => {
            let review = this.props.reviews[reviewId];
            let user = this.props.users[review.user_id];
            return(
              this.reviewItems(user, review)
            )}
          )}
        </ul>
      </section >
    )
  }
}

export default BusinessReviews;