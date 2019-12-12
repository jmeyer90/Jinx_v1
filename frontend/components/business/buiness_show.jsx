import React from 'react';
import BusinessReviewsConstructor from './reviews/business_reviews_constructor';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      business: this.props.business
    };
    this.bizRating = this.bizRating.bind(this);
    this.bizAttrs = this.bizAttrs.bind(this);
    this.bizHoursofOp = this.bizHoursofOp.bind(this);
    this.bizImage = this.bizImage.bind(this);
    this.bizRatingImages = this.bizRatingImages.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusiness( this.props.businessId );
    debugger
  }

  bizImage(){
    return (
      <div>Business Image</div>
    )
  }

  bizRatingImages(){
    return(
      <div>Business Images from Ratings</div>
    )
  }

  bizRating(){
    return(
      <div>Business Rating Function</div>
    )
  }

  bizAttrs() {
    return (
      <div>Business Attribute List</div>
    )
  }

  bizHoursofOp(){
    return(
      <div>Business Hours of Operation</div>
    )
  }

  render(){
    debugger
    return(
      <div className="business-show">
        <h1>Business Show Page</h1>
        <h2>{this.props.business.name}</h2>
        {this.bizImage()}
        {this.bizRatingImages()}
        {this.bizRating()}
        {this.bizAttrs()}
        {this.bizHoursofOp()}
        <BusinessReviewsConstructor businessId={ this.props.businessId } />
      </div>
    )
  }
}

export default BusinessShow;