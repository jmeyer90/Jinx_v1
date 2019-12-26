import React from 'react';
import Link from 'react-router-dom';
import BusinessIndexItem from '../business/business_index_item';
import MapConstructor from '../map/map_constructor';

class SearchResults extends React.Component{
  constructor(props){
    super(props);
    this.dispResults = this.dispResults.bind(this);
    this.dispBusinesses = this.dispBusinesses.bind(this);
    this.dispItems = this.dispItems.bind(this);
  }

  dispResults(){
    debugger
    if( this.props.searchResults){
      const searchBizs = this.props.searchResults.businessNames;
      const searchMenuItems = this.props.searchResults.menuItems;
      const searchAttrs = this.props.searchResults.attrs;
      debugger
      return (
        <>
          <section className="search-results-business-container">
            <h1 className="search-results-businesses-title">Businesses</h1>
            {this.dispBusinesses(searchBizs)}
          </section>
          {this.dispItems(searchMenuItems)}
          {this.dispItems(searchAttrs)}
        </>
      )
    } else {
      return( <div></div> )
    }
  }

  dispBusinesses(searchBizs){
    let reviews = {};
    let businesses = {};
    let businessIds = []; 
    
    Object.values(searchBizs).forEach( value=>{
      if( value instanceof Array){
        businessIds = value
      } else {
        businessIds = Object.values(searchBizs);
      }
    });

    businessIds.forEach(businessId=>{
      businesses[businessId] = this.props.businesses[businessId];
    })

    Object.values(this.props.reviews).forEach(review=>{
      if( businessIds.includes( review.business_id )){
        reviews[review.id] = review;
      }
    })

    debugger
    if( businessIds.length > 0 ){
      return (
          Object.keys(reviews).map(reviewId => (
            <BusinessIndexItem key={reviewId}
              business={businesses[reviews[reviewId].business_id]}
              review={reviews[reviewId]} />
          ))
      )
    }
  }

  dispItems(items){
    debugger
    return (
      Object.keys(items).map(item => (
        <section key={item} className="search-results-item-container">
          <h1 className="search-results-item-title">{item}</h1>
          {this.dispBusinesses({businessIds: items[item] })}
        </section>
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