import React from 'react';
import BuinessIndexItem from '../business/business_index_item';

class Splash extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      businesses: {}
    };
  }

  componentDidMount(){
    this.props.fetchBusinesses() ;
    debugger
  }

  render(){

    const businesses = Object.values (this.props.businesses);
    debugger
    return(
      <section className="Splash">
      <ul>
          {businesses.map( business => (
                < BuinessIndexItem key={business.id} business={business}/>
          ))}
        </ul>
      </section>
    )
  }
}

export default Splash;