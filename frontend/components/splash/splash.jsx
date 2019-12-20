import React from 'react';
import BuinessIndexItem from '../business/business_index_item';
import { Link } from 'react-router-dom';
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

  regions(){
    return (
      <section className="regions-container">
        <h2 className="regions-title">Jinx Middle Earth</h2>
        <hr className="regions-hr"/>
        <ul className="regions-list">
          <li className="region-item">The Shire</li>
          <li className="region-item">Atlantis</li>
          <li className="region-item">Diagon Alley</li>
          <li className="region-item">Helm's Deep</li>
          <li className="region-item">Hogsmeade</li>
        </ul>
      </section>
    )
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
    
    return (
      <div>
        <section className="splash">
          <figure className="splash-img">
            <img className="splash-img-src" src={window.splashImg} alt="background-image" />
          </figure>
          <section className="splash-index-container">
            {this.regions()}
            <ul className="splash-index">
              {reviews.map( review => (
                < BuinessIndexItem key={review.id} business={this.matchBizToReview(review)} review={review}/>
              ))}
            </ul>
          </section>
        </section>
      </div>
    )
  }
}

export default Splash;