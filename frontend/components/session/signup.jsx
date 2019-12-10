import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email: "",
      f_name: "",
      l_name: "",
      password: "",
      zip_code: "",
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return(e)=>{
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    this.props.createUser( this.state );
  }

  render(){
    let { email, f_name, l_name, password, zip_code } = this.state;

    debugger

    return(
      <div>
        <form onSubmit={ (e)=>this.handleSubmit(e) }>
          <h1>Sign Up</h1>
          <label>
            Email:
            <input type="email" value={ email } onChange={ this.update( "email" ) }/>
          </label>
          <label>
            First Name:
            <input type="f_name" value={ f_name } onChange={ this.update("f_name") } />
          </label>
          <label>
            Last Name:
            <input type="l_name" value={ l_name } onChange={ this.update("l_name") } />
          </label>
          <label>
            Zip Code:
            <input type="integer" value={ zip_code } onChange={ this.update("zip_code") } />
          </label>
          <label>
            Password:
            <input type="password" value={ password } onChange={ this.update("password") } />
          </label>
          <input type="submit" value="Create an account"/>
        </form>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default SignUp;