import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
      return (e) => {
        this.setState({ [field]: e.currentTarget.value })
      }
    }

    handleSubmit(){
      this.props.login( this.state );
    }

    render(){
      let { email, password } = this.state;

      return (
          <div className="session-container">
            <form onSubmit={ this.handleSubmit } className="session-form">
              <h1 className="title">Log In to Jinx</h1>
              <label className="top change-session-form">
                New to Jinx? 
                <Link className="session-link" to="/signup">Sign Up </Link>
              </label>
              <h2 className="disclamer">By logging in, you agree to solemnly swear you are up to no good</h2>
              <hr/>
              <label>
              <input type="email" placeholder="Email" value={email} onChange={this.update("email")} required/>
              </label>
              <label>
              <input type="password" placeholder="Password" value={password} onChange={this.update("password")} required/>
              </label>
              <input className="submit" type="submit" value="Log In" />
            </form>
            <label className="bottom change-session-form">
              New to Jinx?
              <Link className="session-link" to="/signup">Sign Up</Link>
            </label>
          </div>
      )
    }
}

export default Login;