import React from 'react';
import BuinessIndexItem from '../business/business_index_item';
import { fetchBusinesses } from '../../util/business_util';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      businesses: {}
    };
    this.matchBizToReview = this.matchBizToReview.bind(this);
  }

  componentDidMount(){
    this.props.fetchBusinesses()
  }

  matchBizToReview(review){
    if(this.props.businesses){
      return(
        this.props.businesses[review.business_id]
      )
    } else {
      return( <div></div> )
    }
  }

  render(){

    const reviews = Object.values (this.props.reviews);
    
    return(
      <section className="splash">
        <figure className="splash-background">
          
        </figure>
        <section className="splash-index-container">
          <ul className="splash-index">
            {reviews.map( review => (
              < BuinessIndexItem key={review.id} business={this.matchBizToReview(review)} review={review}/>
            ))}
          </ul>
        </section>
      </section>
    )
  }
}

export default Splash;