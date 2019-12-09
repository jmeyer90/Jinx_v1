import React from 'react';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email: "",
      f_name: "",
      l_name: "",
      password: ""
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return(e)=>{
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(){
    this.props.createUser( this.state );
  }

  render(){
    let { email, f_name, l_name, password } = this.state;

    return(
      <form onSubmit={ this.handleSubmit }>
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
          Password:
          <input type="password" value={ password } onChange={ this.update("password") } />
        </label>
        <input type="submit" value="Create an account"/>
      </form>
    )
  }
}

export default SignUp;