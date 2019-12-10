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
        <div>
          <form onSubmit={ this.handleSubmit }>
            <h1>Login</h1>
            <label>
              Email:
            <input type="email" value={email} onChange={this.update("email")} />
            </label>
            <label>
              Password:
            <input type="password" value={password} onChange={this.update("password")} />
            </label>
            <input type="submit" value="Login" />
          </form>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
}

export default Login;