import { connect } from 'react-redux';
import Map from './map';

const msp = (state) =>{
  let center ={}
  if (Object.values(state.entities.businesses)[0]){
    center= {
      lat: Object.values(state.entities.businesses)[0].latitude,
      lng: Object.values(state.entities.businesses)[0].longitude
    }
  }
  
  return({
    businesses: state.entities.businesses,
    center: center
  })
}

export default connect( msp )( Map );