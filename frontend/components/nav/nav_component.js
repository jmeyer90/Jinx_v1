import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';


const msp = state => ({
  loggedIn: Boolean(state.session.currentUserId)
});

const mdp = dispacth =>({
  logout: ()=> dispacth( logout())
});

export default connect(msp, mdp)( Nav );

// export default Nav;