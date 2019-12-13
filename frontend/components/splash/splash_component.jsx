import Splash from './splash';
import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';

const msp = state =>({
  businesses: state.entities.businesses
});

const mdp = dispatch =>({
  fetchBusiness: (businessId => dispatch( fetchBusiness( businessId ))),
  fetchBusinesses: (() => dispatch( fetchBusinesses()))
});

export default connect( msp, mdp )( Splash );