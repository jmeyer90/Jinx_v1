import React from 'react';
import BusinessReviewConstructor from '../reviews/business_review_constructor';
import { displayRating } from './../../util/display_util'

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      business: this.props.business
    };
    this.bizRating = this.bizRating.bind(this);
    this.bizAttrs = this.bizAttrs.bind(this);
    this.bizHoursofOp = this.bizHoursofOp.bind(this);
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

  bizAttrs() {
    let categories = {};
    const attr_items = this.props.business.attribute_items || [];

    for (let i=0; i< attr_items.length; i++){
      let category = attr_items[i].attr_type;
      categories[category] = categories[category]  || [];
      categories[category].push(attr_items[i].name)
    }

    if( attr_items){
      return (
        <section className="show-attribute-list">
          <section className="attr-sticky">
            <ul>
              {Object.keys(categories).map(( category, idx1 )=>(
                <li key={idx1} className="attribute-categories-container">
                  <ul className="attribute-categories">
                    <h2 className="category">{category}</h2>
                    {categories[category].map(( attr,idx2 )=>(
                      <li key={idx2} className="attr-name">
                        {attr}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        </section>
      )
    } else {
      return( <div></div> )
    }
  }

  bizHoursofOp(){
    return(
      <h2 className="hours-of-op">Business Hours of Operation</h2>
    )
  }

  bizMap(){
    return(
      <h2 className="map">Map</h2>
    )
  }

  reviewbutton(){
    debugger
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
    return(
      <div className="business-show-container">
        <section className="business-show">
          {this.bizRatingImages()}
          <span className="business-details">
            <span className="name-rating-map-hrs">
              <span className="business-name-rating">
                <h2 className="business-name">{this.props.business.name}</h2>
                {this.bizRating()}
                {this.reviewbutton()}
              </span>
              <span className="business-map-hrs">
                {this.bizMap()}
                {this.bizHoursofOp()}
              </span>
            </span>
            <span className="business-attr">
              {this.bizAttrs()}
            </span>
          </span>
          <BusinessReviewConstructor className="review-container"/>
        </section>
      </div>
    )
  }
}

export default BusinessShow;