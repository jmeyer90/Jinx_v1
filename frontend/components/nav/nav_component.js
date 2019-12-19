import { connect } from 'react-redux';
import Nav from './nav';
import { logout, login } from '../../actions/session_actions';
import { fetchBusinesses } from '../../actions/business_actions';
// import { withRouter } from 'react-router-dom';

const msp = ( state, ownProps ) => {  
  return({
    loggedIn: Boolean( state.session.currentUserId )
  })
};

const mdp = dispacth =>({
  logout: ()=> dispacth( logout()),
  login: user => dispacth( login( user )),
});

export default connect(msp, mdp)( Nav );
