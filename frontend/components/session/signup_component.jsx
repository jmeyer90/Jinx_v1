import SignUp from './signup';
import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
 
const mdp = dispatch =>({
  createUser: user => dispatch( createUser( user ))
})

export default connect( null, mdp )( SignUp );