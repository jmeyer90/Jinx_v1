import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const disclamer = "By logging in, you agree to solemnly swear you are up to no good";
const user = {
  email: "",
  password: ""
};

const msp = state =>({
  user: user,
  formType: "Log In",
  linkTitle: "New to Jinx?",
  alternatePath: "/signup",
  disclamer: disclamer,
  alternateForm: "Sign Up",
});

const mdp = dispatch => ({
  action: user => dispatch( login( user ))
});

export default connect( msp, mdp )( SessionForm );