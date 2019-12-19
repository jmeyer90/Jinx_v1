import React from 'react';
import BusinessReviewConstructor from '../reviews/business_review_constructor';
import { displayRating } from './../../util/display_util'
import ContactInfo from './contact_info';
import MapConstructor from '../map/map_constructor';
import HoursOfOp from '../hours_of_op/hours_of_operation';
import Attributes from './business_attributes';
import ReviewForm from '../reviews/_review_form';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      business: this.props.business,
      review: {
        id: "", body: "", rating: "", img: ""
      }
    };
    this.bizRating = this.bizRating.bind(this);
    this.bizRatingImages = this.bizRatingImages.bind(this);
    this.formModal = this.formModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness( this.props.businessId );
  }

  bizRatingImages(){
    return(
      <h2 className="business-review-images">Business Images from Ratings</h2>
    )
  }

  bizRating(){
    const ratings = Object.values(this.props.reviews).map( review => review.rating );
    let length = ratings.length;
    let sum = length > 0 ? ratings.reduce(( acc, el )=> acc + el ) : 0;
    let avgRating = sum/length;
    
    return(
       displayRating( avgRating )
    )
  }

  bizMapHrs(){
    return(
      <span className="business-map-hrs-container">
        <h2 className="business-map-hrs-title">Location &amp; Hours</h2>
        <section className="business-map-hrs">
        <MapConstructor />
        <HoursOfOp hoursOfOp={this.props.business.hours_of_operation} />
        </section>
      </span>
    )
  }

  reviewbutton(){
    if(this.props.currentUserId){
      return(
        <button className="modal-form-button" onClick={()=>this.dispModal("flex", 1)}>
          Write a Review
        </button>
      )
    } else {
      return( <div></div> )
    }
  }

  dispModal(display, zIndex){
    const modal = document.getElementById("form-modal-container")
    modal.style.display = display;
    modal.style.zIndex = zIndex;
  }

  formModal(){
    return(
      <section className="form-modal" id="form-modal-container">
        <span className="close-form-span">
          <button className="close-form-button" onClick={() => this.dispModal("none", -1)}>
            Close
          </button>
        </span>
        <ReviewForm business={this.props.business} action={this.props.createReview}
          currentUserId={this.props.currentUserId} update={this.updateField}
          handleSubmit={this.handleSubmit} buttonText={"Post Review"}
          review={null} htmlClass={"modal"} />
      </section>
    )
  }

  updateField(field) {
    debugger
    return (e) => {
      this.setState({ review: {[field]: e.currentTarget.value} })
    }
  }

  handleSubmit(e, action) {
    const review = { 
      business_id: this.props.business.id,
      body: this.state.review.body,
      rating: this.state.review.rating,
      id: this.state.reivew.id
    }

    debugger
    this.resetState(review.id);
    action(this.props.business.id, review)
  }

  render(){
    return(
      <div className="business-show-container">
        {this.bizRatingImages()}
        <section className="business-show">
          <section className="business-show-col1">
            <span className="business-details">
              <span className="name-rating-map-hrs">
                <span className="business-name-rating">
                  <h2 className="business-name">{this.props.business.name}</h2>
                  {this.bizRating()}
                  {this.reviewbutton()}
                  {this.formModal()}
                </span>
                {this.bizMapHrs()}
              </span>
              <span className="business-attr">
                <Attributes business={this.props.business} />
              </span>
              <BusinessReviewConstructor className="review-container" />
            </span>
          </section>
          <section className="business-show-col2">
            <ContactInfo />
          </section>
        </section>
      </div>
    )
  }
}

export default BusinessShow;