import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import SessionForm from './session_form';
 
const disclamer = "By continuing, you agree to solemnly swear you are up to no good.";
const user = {
  email: "",
  password: "",
  f_name: "",
  l_name: "",
  zip_code: ""
};

const msp = state => ({
  user: user,
  formType: "Sign Up",
  linkTitle: "New to Jinx?",
  alternatePath: "/login",
  disclamer: disclamer,
  alternateForm: "Log In"
});

const mdp = dispatch =>{
  return({
    action: user => dispatch( createUser( user ))
  })
}

export default connect( msp, mdp )( SessionForm )