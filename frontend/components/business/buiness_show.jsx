import React from 'react';
import BusinessReviews from './reviews/business_reviews';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBusiness( this.props.bussiness.id )
  }

  render(){
    return(
      <div className="business-show">
      <h1>Business Show Page</h1>
      <BusinessReviews business={ this.props.business } />
      </div>
    )
  }
}

export default BusinessShow;