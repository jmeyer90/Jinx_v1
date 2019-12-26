import React from 'react';
import Link from 'react-router-dom';
import BusinessIndexItem from '../business/business_index_item';
import MapConstructor from '../map/map_constructor';

class SearchResults extends React.Component{
  constructor(props){
    super(props);
    this.dispResults = this.dispResults.bind(this);
    this.dispBusinesses = this.dispBusinesses.bind(this);
  }

  dispResults(){
    debugger
    // const searchMemuItems = this.props.searchResults.menuItems;
    // const searchAttrs = this.props.searchResults.attrs;
    if( this.props.searchResults){
      const searchBizs = this.props.searchResults.businessNames;
      debugger
      return (
        this.dispBusinesses(searchBizs)
      )
    } else {
      return( <div></div> )
    }
  }

  dispBusinesses(searchBizs){
    let reviews = {};
    let businesses = {};
    let businessIds = Object.values(searchBizs);

    businessIds.forEach(businessId=>{
      businesses[businessId] = this.props.businesses[businessId];
    })

    Object.values(this.props.reviews).forEach(review=>{
      if( businessIds.includes( review.business_id )){
        reviews[review.id] = review;
      }
    })

    debugger
    return(
      Object.keys(reviews).map( reviewId =>(
          <BusinessIndexItem key={reviewId} 
            business={businesses[reviews[reviewId].business_id]} 
            review={reviews[reviewId]}/>
      ))
    )
  }


  render(){
    return(
      <section className="search-results-container">
        {this.dispResults()}
        {/* <MapConstructor /> */}
      </section>
    )
  }
}

export default SearchResults;