import { connect } from 'react-redux';
import BusinessReviews from './business_reviews';
import { fetchReviews, fetchReview } from '../../../actions/review_actions';
import { fetchUser } from '../../../actions/user_actions';

const msp = (state, ownProps) =>{
  
  return({
  business: state.entities.businesses[ ownProps.businessId ] || {},
  reviews: state.entities.reviews
  })
};

const mdp = dispatch => {
  
  return({
  fetchReviews: businessId => dispatch( fetchReviews( businessId ) ),
  fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId)),
  fetchUser: userId => dispatch( fetchUser( userId ))
  })
};

export default connect(msp, mdp)( BusinessReviews );