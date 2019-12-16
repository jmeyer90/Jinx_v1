import { connect } from 'react-redux';
import BusinessShow from './buiness_show';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom'

const msp =  ( state, ownProps ) =>{
  const business = state.entities.businesses[ownProps.match.params.businessId] || {};

  debugger
  return({
    business: business,
    reviews: state.entities.reviews || {},
    users: state.entities.users || {},
    businessId: ownProps.match.params.businessId,
    currentUserId: state.session.currentUserId
  })
};

const mdp = dispatch =>({
  fetchBusiness: businessId => dispatch( fetchBusiness( businessId )),
  fetchBusinesses: () => dispatch( fetchBusinesses() )
});

export default connect( msp, mdp )( BusinessShow );