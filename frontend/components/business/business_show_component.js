import { connect } from 'react-redux';
import BusinessShow from './buiness_show';
import { fetchBusiness } from '../../actions/business_actions';
import { withRouter } from 'react-router-dom'

const msp =  ( state, ownProps ) =>{
  // debugger
  // let businesses = state.entities.business;
  // let business;
  // if ( businesses ){
  //   debugger
    // business = businesses[[ownProps.match.params.businessId]];
  // } else {
  //   debugger
  //  business = {};
  // }
  debugger
  return({
    business: state.entities.businesses[ownProps.match.params.businessId],
    businessId: ownProps.match.params.businessId 
  })
};

const mdp = dispatch =>({
  fetchBusiness: businessId => dispatch( fetchBusiness( businessId ))
});

export default connect( msp, mdp )( BusinessShow );