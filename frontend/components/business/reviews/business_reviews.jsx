import React from 'react';

class BusinessReviews extends React.Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    debugger
    this.props.fetchReviews(this.props.businessId)
  }
  
  render(){

    debugger
    const reviews = this.props.business.reviews ? Object.values(this.props.business.reviews) : [];

    return (
      <section className="business-reviews" >
        {this.props.business.name} Reviews:
        <ul className="business-review-list" >
          {reviews.map(review => (
            <li className="business-review-item">
              User: {review.user.name}
              <p className="review-body">{review.body}</p>
            </li>
          ))}
        </ul>
      </section >
    )
  }
}


export default BusinessReviews;