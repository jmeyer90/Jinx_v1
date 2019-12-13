import { connect } from 'react-redux';
import BusinessShow from './buiness_show';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom'

const msp =  ( state, ownProps ) =>{
  const business = state.entities.businesses[ownProps.match.params.businessId] || {};
  let mappedState = {};

  if (business.reviews){
    mappedState = {
      business: business,
      reviews: Object.assign(business.reviews) || {},
      authors: Object.assign(business.users) || {},
      businessId: ownProps.match.params.businessId
    } 
  } else {
    mappedState = {
      businessId: ownProps.match.params.businessId,
      business: business
    }
  };

  debugger

  return(mappedState)
};

const mdp = dispatch =>({
  fetchBusiness: businessId => dispatch( fetchBusiness( businessId )),
  fetchBusinesses: () => dispatch( fetchBusinesses() )
});

export default connect( msp, mdp )( BusinessShow );