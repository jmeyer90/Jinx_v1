import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  sessionLinks(){
    if ( this.props.loggedIn ){
      debugger
      return(
        <button onClick={()=> this.props.logout() }>Log Out</button>
      )
    } else {
      return(
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      )
    }
  }

  render(){
    return(
      <header className="nav-bar">
        <h1 className="logo">Jinx</h1>
        <div className="session-buttons">
          { this.sessionLinks() }
        </div>
      </header>
    )
  }
}

export default Nav;