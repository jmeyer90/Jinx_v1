import React from 'react';
import BusinessReviews from './reviews/business_reviews';

class BusinessShow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      business: this.props.business
    };
    // this.businessTitle = this.businessTitle.bind(this);
  }

  // businessTitle(){
  //   if (!this.state){
  //     this.props.fetchBusiness(this.props.businessId);

  //     const biz = this.props.businesses[this.props.businessId];
  //     return(
  //       <h2>{biz.name}</h2>
  //     )
  //   } 
  // }

  componentDidMount(){
    this.props.fetchBusiness( this.props.businessId );
    this.setState({ business: this.props.business });
    debugger
  }

  render(){
    debugger
    return(
      <div className="business-show">
        <h1>Business Show Page</h1>
        <h2>{this.props.business.name}</h2>
        {/* <BusinessReviews businessId={ this.props.business.id } /> */}
      </div>
    )
  }
}

export default BusinessShow;