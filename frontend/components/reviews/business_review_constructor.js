import { connect } from 'react-redux';
import { createReview, updateReview, deleteReview, fetchReviews } from '../../actions/review_actions';
import { fetchBusiness } from '../../actions/business_actions'
import BusinessReviews from './business_reviews';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
 let business = {};
//  let reviews = {};
//  let users = {};
  if (state.session.currentBusinessId){
    business = state.entities.businesses[state.session.currentBusinessId];
    // Object.values(state.entities.reviews).forEach(review=> {
    //   if (review.businessId === state.entities.businesses.currentBusinessId){
    //     reviews[review.id] = review;
    //   }
    // });

  }
  debugger

  return({
    business: business,
    reviews: state.entities.reviews,
    users: state.entities.users,
    currentUserId: state.session.currentUserId,
    currentBusinessId: state.session.currentBusinessId || null
  })
}

const mdp = dispatch =>({
  createReview: (businessId, review) => dispatch(createReview(businessId, review )),
  updateReview: (businessId, review) => dispatch(updateReview(businessId, review )),
  deleteReview: reviewId => dispatch( deleteReview( reviewId )),
  fetchReviews: businessId => dispatch( fetchReviews( businessId)),
  fetchBusiness: businessId => dispatch( fetchBusiness( businessId ))
})

export default connect( msp, mdp )( BusinessReviews );