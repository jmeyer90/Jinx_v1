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
    this.props.createUser( this.state );
  }

  render(){
    let { email, f_name, l_name, password, zip_code } = this.state;

    return (
      <section className="session-page-container">
        <div className="session-container">
          <form onSubmit={ (e)=>this.handleSubmit(e) } className="session-form">
            <h1 className="title">Sign Up</h1>
            <label className="top greeting">
              Connect with the wonderful wizarding world near you.
            </label>
            <h2 className="disclamer">By continuing, you agree to solemnly swear you are up to no good.</h2>
            <hr/>
            <label>
              <input type="email" placeholder="Email" value={ email } onChange={ this.update( "email" ) }/>
            </label>
            <section className="name-section">
              <label>
                <input id="name" type="f_name" placeholder="First Name" value={ f_name } onChange={ this.update("f_name") } />
              </label>
              <label>
                <input id="name" type="l_name" placeholder="Last Name" value={ l_name } onChange={ this.update("l_name") } />
              </label>
            </section>
            <label>
              <input type="password" placeholder="Password" value={password} onChange={this.update("password")} />
            </label>
            <label>
              <input type="integer" placeholder="Zip Code" value={ zip_code } onChange={ this.update("zip_code") } />
            </label>
            <label className="bottom-disclamer"> 
              You also understand that Jinx may send you owls requesting your help for perilous quests filled with adventure and near certain death.
            </label>
            <input className="submit" type="submit" value="Sign Up"/>
          </form>
          <label className="bottom change-session-form">
            Already on Jinx?
            <Link className="session-link" to="/login">Log in</Link>
          </label>
        </div>
        <figure className="session-img">
          <img className="session-img-src" src={window.logoCircleImg} alt="profile-image" />
        </figure>
      </section >
    )
  }
}

export default SignUp;