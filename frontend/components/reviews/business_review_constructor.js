import { connect } from 'react-redux';
import { createReview, updateReview, deleteReview, fetchReviews } from '../../actions/review_actions';
import BusinessReviews from './business_reviews';
import { withRouter } from 'react-router-dom'

const msp = (state, ownProps) => {
  const business = Object.values( state.entities.businesses )[0];

  return({
    business: business || {},
    reviews: state.entities.reviews || {},
    users: state.entities.users || {},
    currentUserId: state.session.currentUserId
  })
}

const mdp = dispatch =>({
  createReview: (businessId, review) => dispatch(createReview(businessId, review )),
  updateReview: (businessId, review) => dispatch(updateReview(businessId, review )),
  deleteReview: reviewId => dispatch( deleteReview( reviewId )),
  fetchReviews: businessId => dispatch( fetchReviews( businessId))
})

export default connect( msp, mdp )( BusinessReviews );