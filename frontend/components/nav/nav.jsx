import React from 'react';
import { Link } from 'react-router-dom';
import SearchConstructor from '../search/search_constructor';
import LoginModal from './login_modal';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      email: "",
      password: ""
    }
    this.logDemoUser = this.logDemoUser.bind(this);
    this.loginModal = this.loginModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  logDemoUser(){
    this.props.login({
      email: "demo@mail.com",
      password: "password"
    });
  }

  sessionLinks(path, htmlClass){
    if ( path && ( path === '/login' ) || ( path === '/signup' ) ){
      return ( 
        <></>
       )
    } else if ( this.props.loggedIn ){
      return (
        <>
          <section className={`search-bar${htmlClass}`}>
            <SearchConstructor />
          </section>
          <div className={`session-buttons${htmlClass}`}>
            <button onClick={ ()=> this.props.logout() }>Log Out</button>
          </div>
        </>
      )
    } else {
      return (
        <>
          <section className={`search-bar${htmlClass}`}>
            <SearchConstructor />
          </section>
          <div className={`session-buttons${htmlClass}`}>
            <span className="nav-login">
              <button onClick={()=>this.dispModal("flex", 1)}>Log In</button>
              {this.loginModal()}
            </span>
            <Link to="/signup">Sign Up</Link>
            <button onClick={ ()=>this.logDemoUser() }>Demo User</button>
          </div>
        </>
      )
    }
  }

  dispModal( display, zIndex){
    const modal = document.getElementById("login-modal-container")
    modal.style.display = display;
    modal.style.zIndex = zIndex;
  }

  loginModal(){
    const review = this.state;
    return (
      <section className="login-modal-outer-container" id="login-modal-container">
        <span className="login-modal-background" onClick={() => this.dispModal("none", -1)}></span>
        <section className="login-modal-inner-container">
          <LoginModal update={this.update} handleSubmit={this.handleSubmit} review={review}/>
        </section>
      </section>
    )
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.dispModal("none", -1)
  }

  render(){
    const path = this.props.location.pathname;
    let htmlClass = "";
    if (path === "/") htmlClass="-splash"

    return(
      <header className={`nav-container${htmlClass}`}>
        <nav className={`nav-bar${htmlClass}`}>
          <Link to="/" className={`logo${htmlClass}`}>
            <img className={`logo-img-src${htmlClass}`} src={window.logoImg} alt="profile-image" />
        </Link>
        { this.sessionLinks(path, htmlClass) }
        </nav>
      </header>
    )
  }
}

export default Nav;