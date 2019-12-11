import { connect } from 'react-redux';
import BusinessShow from './buiness_show';
import { fetchBusiness } from '../../actions/business_actions';

const msp =  ( state, ownProps ) =>({
  bussiness: state.businesses[ ownProps.match.params.businessId ]
});

const mdp = dispatch =>({
  fetchBusiness: businessId => dispatch( fetchBusiness( businessId ))
});

export default connect( msp, mdp )( BusinessShow );