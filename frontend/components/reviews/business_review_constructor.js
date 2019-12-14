import { connect } from 'react-redux';
import { createReview, updateReview, deleteReview } from '../../actions/review_actions';
import BusinessReviews from './business_reviews';

const msp = state => {
  const business = state.entities.businesses[ownProps.match.params.businessId] || {};

  return({
    business: business,
    reviews: state.entities.reviews || {},
    users: state.entities.users || {},
    currentUserId: state.session.currentUserId,
    businessId: ownProps.match.params.businessId
  })
}

const mdp = dispatch =>({
  createReview: review => dispatch( createReview( review )),
  updateReview: review => dispatch( updateReview ( review )),
  deleteReview: reviewId => dispatch( deleteReview( reviewId ))
})

export default connect( msp, mdp )( BusinessReviews );