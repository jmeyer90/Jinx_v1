import { connect } from 'react-redux';
import BusinessReviews from './business_reviews';
import { fetchReviews, fetchReview } from '../../../actions/review_actions';

const msp = (state, ownProps) =>{
  debugger
  return({
  business: state.entities.businesses[ ownProps.businessId ] || {}
  })
};

const mdp = dispatch => {
  debugger
  return({
  fetchReviews: businessId => dispatch( fetchReviews( businessId ) ),
  fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId))
  })
};

export default connect(msp, mdp)( BusinessReviews );