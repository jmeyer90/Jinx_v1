import React from 'react';
import ReviewForm from './_review_form'
import ReviewItemActions from './review_item_actions'
import { displayRating } from '../../util/display_util';

class BusinessReviews extends React.Component{
  constructor(props){
    super(props);
    this.state = { id:"", body: "", rating: "", reviewsDisp: this.reviewsDisp()};
    this.reviewItems = this.reviewItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.reviewsDisp = this.reviewsDisp.bind(this);
    this.setReviewState = this.setReviewState.bind(this);
  }

  reviewsDisp(){
    if (this.props.reivews){
      const reviewsArr = Object.values(this.props.reivews);
      let reviewsDisp = {}
      reviewsArr.forEach( review =>{
        reviewsDisp[review.id] = false;
      })
    } else {
      return( <div></div> )
    }
  }

  reviewItems(user, review){
    return (
      <li key={review.id} className="business-review-item">
        <section className="user-info">
          <span className="username">{user.f_name} {user.l_name}</span>
          <figure className="profile-img">User</figure>
        </section>
        <span className="review-item-details">
          <section className="user-rating-container">
            {displayRating( review.rating )}
          </section> 
          <p className="review-body">{review.body}</p>
        </span>
        <ReviewItemActions review={review} currentUserId={this.props.currentUserId} 
          business={this.props.business} handleSubmit={this.handleSubmit} 
          updateField={this.updateField} deleteReview={this.props.deleteReview} 
          updateReview={this.props.updateReview} reviewState={this.state} 
          setReviewState={this.setReviewState}/>
      </li>
    )
  };

  setReviewState(review){
    this.setState(review);
  }

  updateField(field){
    return(e)=>{
      this.setState({[field]: e.currentTarget.value})
      debugger
    }
  }

  handleSubmit(e, action){
    const review = {
      business_id: this.props.business.id,
      body: this.state.body,
      rating: this.state.rating, 
      id: this.state.id
    }

    this.setState({ id: "", body: "", rating: "", reviewsDisp: { [review.id]: false } })
    action(this.props.business.id, review)
  }

  render(){
    if (this.props.business) {
      const buttonText = "Post Review";
      const htmlClass ="create";
      const review={
        body: this.state.body,
        rating: this.state.rating
      }

      return (
        <section className="business-reviews" >
       
          <h2 className="reviews-heading">Recommended Reviews:</h2>
          <ReviewForm business={this.props.business} action={this.props.createReview}
            currentUserId={this.props.currentUserId} update={this.updateField}
            handleSubmit={this.handleSubmit} buttonText={buttonText} 
            review={review} htmlClass={htmlClass}/>

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
    } else {
      return( <div></div> )
    }
  }
}

export default BusinessReviews;