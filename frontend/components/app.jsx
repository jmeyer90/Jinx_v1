import React from 'react';
import { Route } from 'react-router-dom';
import SignUpComponent from './session/sign_up_component';
import LoginComponent from './session/login_component';
import NavComponent from './nav/nav_component';
import BusinessShowComponent from './business/business_show_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>{
  return(
    <>
      <Route path="/" component={ NavComponent } />
      <Route path={`/businesses/:businessId`} component={ BusinessShowComponent } />
      <AuthRoute path="/signup" component={ SignUpComponent } />
      <AuthRoute path="/login" component={ LoginComponent } />
    </>
  )
};

export default App;