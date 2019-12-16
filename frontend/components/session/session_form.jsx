import React from 'react';
import { Link } from 'react-router-dom';
import SignupFields from './session_form_signup_fields'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.topGreeting = this.topGreeting.bind(this);
    this.bottomNotes = this.bottomNotes.bind(this);
    this.logDemoUser = this.logDemoUser.bind(this);
  }

  handleSubmit(e) {
    this.props.action(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  logDemoUser(){
    const demoUser= {
      email: "demo@mail.com",
      password: "password"
    }

    if ( this.props.formType === "Log In"){
      this.props.action( demoUser )
    } else {
      this.props.login( demoUser )
    }
  }

  topGreeting(){

    if (this.props.formType === "Sign Up"){
      return(
        <label className="top greeting">
          Connect with the wonderful wizarding world near you.
        </label>
      )
    } else {
      return (
        <label className="top change-session-form">
          {this.props.linkTitle}
          <Link className="session-link" to={this.props.alternatePath}>{this.props.alternateForm}</Link>
        </label>
      )
    }
  }

  bottomNotes(){

    if (this.props.formType === "Sign Up") {
      return (
        <label className="bottom-disclamer">
          You also understand that Jinx may send you owls requesting your help for perilous quests filled with adventure and near certain death.
        </label>
      )
    } 
  }

  render() {
    let { email, password, } = this.state;

    return (
      <div className="session-container">
        <div className="session-form">
          <h1 className="title">{ this.props.formType }</h1>
          { this.topGreeting() }
          <button className="submit" onClick={() => this.logDemoUser()}>Log In with Demo User</button>
          <h2 className="disclamer">{this.props.disclamer}</h2>
          <hr className="session-line"/>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>
              <input type="email" placeholder="Email" value={ email } onChange={ this.update("email") } required />
            </label>
            < SignupFields formType={ this.props.formType} user={ this.state } update={ this.update }/>
            <label>
              <input type="password" placeholder="Password" value={password} onChange={this.update("password")} required />
            </label>
            { this.bottomNotes() }
            <input className="submit" type="submit" value={this.props.formType} />
          </form>
          <label className="bottom change-session-form">
            {this.props.linkTitle}
            <Link className="session-link" to={this.props.alternatePath}>{this.props.alternateForm}</Link>
          </label>
        </div>
      </div>
    )
  }
}

export default SessionForm;