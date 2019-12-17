import React from 'react';
import BusinessReviewConstructor from '../reviews/business_review_constructor';
import { displayRating } from './../../util/display_util'
import ContactInfo from './contact_info';
import MapConstructor from '../map/map_constructor';
import HoursOfOp from '../hours_of_op/hours_of_operation';
import Attributes from './business_attributes';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      business: this.props.business
    };
    this.bizRating = this.bizRating.bind(this);
    this.bizRatingImages = this.bizRatingImages.bind(this);
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
        <button className="modal-form-button">
          Write a Review
        </button>
      )
    } else {
      return( <div></div> )
    }
  }

  render(){
    debugger
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