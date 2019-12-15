import React from 'react';
import BusinessReviewConstructor from '../reviews/business_review_constructor';

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
    
  }

  bizImage(){
    return (
      <h2>Business Image</h2>
    )
  }

  bizRatingImages(){
    return(
      <h2>Business Images from Ratings</h2>
    )
  }

  bizRating(){
    const ratings = Object.values(this.props.reviews).map( review => review.rating );
    let length = ratings.length;
    let sum = length > 0 ? ratings.reduce(( acc, el )=> acc + el ) : 0;
    let avgRating = sum/length;
    
    return(
      <h2>Business Rating: {avgRating}</h2>
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
        <section className="attribute-list">
          <h2>Business Attribute List:</h2>
          <ul>
            {Object.keys(categories).map(( category, idx1 )=>(
              <li key={idx1} className="attribute-categories-container">
                <ul className="attribute-categories">
                  <h2>Category: {category}</h2>
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
      )
    } else {
      return( <div></div> )
    }
  }

  bizHoursofOp(){
    return(
      <h2>Business Hours of Operation</h2>
    )
  }

  render(){
    return(
      <div className="business-show">
        <h1>Business Show Page</h1>
        <h2>Business name: {this.props.business.name}</h2>
        {this.bizImage()}
        {this.bizRatingImages()}
        {this.bizRating()}
        {this.bizAttrs()}
        {this.bizHoursofOp()}
        <BusinessReviewConstructor />
      </div>
    )
  }
}

export default BusinessShow;