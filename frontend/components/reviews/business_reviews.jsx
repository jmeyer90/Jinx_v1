import React from 'react';
import ReviewForm from './_review_form';

class BusinessReviews extends React.Component{
  constructor(props){
    super(props);
    this.state = { id:"", body: "", rating: "", reviewsDisp: this.reviewsDisp()};
    this.reviewItems = this.reviewItems.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reviewActions = this.reviewActions.bind(this);
    this.reviewForm = this.reviewForm.bind(this);
    this.updateField = this.updateField.bind(this);
    this.reviewsDisp = this.reviewsDisp.bind(this);
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
        <h2>{user.f_name}'s Review: </h2>
        <p>Review Body: {review.body}</p>
        {user.f_name}'s Rating: {review.rating}
        {this.reviewActions(review)}
      </li>
    )
  };

  reviewActions(review){
    if( review.user_id === this.props.currentUserId ){
      return(
        <section className="review-actions">
          <button className="review-actions-button" onClick={() =>this.props.deleteReview(review.id)}>Delete Review</button>
          {this.displayUpdateForm(review)}
        </section>
      )
    }
  }

  displayUpdateForm(review){
    if(this.state.reviewsDisp[review.id]){
      const title = "Update Review";
      const buttonText = "Update Review";
      return(
        <section className="update-review">
        {this.reviewForm(this.props.updateReview, title, buttonText)}
        < button className = "review-actions-button" 
            onClick={() => this.setState({ id: "", body: "", rating: "", reviewsDisp: { [review.id]: false } })}>
            Hide
        </button >
        </section>
      )
    } else {
      return(
        <button className="review-actions-button" 
          onClick={() => this.setState({ id: review.id, body: review.body, rating: review.rating, 
            reviewsDisp: { [review.id]: true } })}>
            Update Review
        </button>
      )
    }
  }

  reviewForm(action, title, buttonText){
    debugger
    const review = {
      business_id: this.props.business_id,
      body: this.state.body,
      rating: this.state.rating
    }
    return(
      <ReviewForm business={this.props.business} 
        action={action} currentUserId={this.props.currentUserId}
        update={this.updateField} handleSubmit ={this.handleSubmit}
        title={title} buttonText={buttonText} review={review}/>
    )
  }

  updateField(field){
    debugger
    return(e)=>{
      debugger
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
    debugger
    action(this.props.business.id, review)
  }

  render(){
    if (this.props.business) {
      const title = "Create a New Review";
      const buttonText = "Post Review";
      return (
        <section className="business-reviews" >
       
          <h2>{this.props.business.name} Reviews:</h2>
          {this.reviewForm(this.props.createReview, title, buttonText, null)}

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