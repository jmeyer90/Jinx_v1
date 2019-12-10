import React from 'react';
import { Route } from 'react-router-dom';
import SignUpComponent from './session/sign_up_component';
import LoginComponent from './session/login_component';
import NavComponent from './nav/nav_component'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>{
  return(
    <>
      <h1>App Component</h1>
      <Route path="/" component={ NavComponent } />
      <AuthRoute path="/signup" component={ SignUpComponent } />
      <AuthRoute path="/login" component={ LoginComponent } />
    </>
  )
};

export default App;