import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';
// import { withRouter } from 'react-router-dom';

const msp = ( state, ownProps ) => ({  
  loggedIn: Boolean( state.session.currentUserId )
});

const mdp = dispacth =>({
  logout: ()=> dispacth( logout())
});

export default connect(msp, mdp)( Nav );
