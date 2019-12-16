import React from 'react';
import ReviewForm from './_review_form'
import ReviewIndexItem from './review_index_item'

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

  reviewItems(user, review){ // send to review index items, pass everything we pass to ReviewIndexItem plus user
    return (
        <ReviewIndexItem review={review} user={user} 
          currentUserId={this.props.currentUserId} business={this.props.business} 
          handleSubmit={this.handleSubmit} updateField={this.updateField} 
          deleteReview={this.props.deleteReview} updateReview={this.props.updateReview} 
          reviewState={this.state} setReviewState={this.setReviewState}/>
    )
  };

  setReviewState(review){
    this.setState(review);
  }

  updateField(field){//unnecessary? onChange- update review directly in form
    return(e)=>{
      this.setState({[field]: e.currentTarget.value})
      debugger
    }
  }

  handleSubmit(e, action){
    const review = { //set state to equal review
      business_id: this.props.business.id,
      body: this.state.body,
      rating: this.state.rating, 
      id: this.state.id
    }

    this.setState({ id: "", body: "", rating: "", reviewsDisp: { [review.id]: false } })//reset state after dispatch action
    action(this.props.business.id, review)
  }

  render(){
    if (this.props.business) {
      const buttonText = "Post Review";
      const htmlClass ="create";
      const review={
        body: this.state.body, //set to empty string
        rating: this.state.rating //set to empty string
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