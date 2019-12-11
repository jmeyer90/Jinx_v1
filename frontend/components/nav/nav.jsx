import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  constructor(props){
    super(props);
    this.logDemoUser = this.logDemoUser.bind(this);
  }

  logDemoUser(){
    this.props.login({
      email: "demo@mail.com",
      password: "password"
    });
  }

  sessionLinks(){
    const path = this.props.location.pathname;

    if ( path && ( path === '/login' ) || ( path === '/signup' ) ){
      return ( 
        <></>
       )
    } else if ( this.props.loggedIn ){
      debugger
      return (
        <>
          <input className="search-bar" type="text" placeholder="Search Bar" />
          <div className="session-buttons">
            <button onClick={ ()=> this.props.logout() }>Log Out</button>
          </div>
        </>
      )
    } else {
      return (
        <>
          <input className="search-bar" type="text" placeholder="Search Bar" />
          <div className="session-buttons">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <button onClick={ ()=>this.logDemoUser() }>Demo User</button>
          </div>
        </>
      )
    }
  }

  render(){
    debugger
    return(

      <header className="nav-container">
        <nav className="nav-bar">
        <Link to="/" className="logo">Jinx</Link>
        { this.sessionLinks() }
        </nav>
      </header>
    )
  }
}

export default Nav;