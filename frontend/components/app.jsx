import React from 'react';
import { Route } from 'react-router-dom';
import SignUpComponent from './session/sign_up_constructor';
import LoginComponent from './session/login_constructor';
import NavComponent from './nav/nav_component';
import BusinessShowContainer from './business/business_show_container';
import SplashComponent from './splash/splash_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>{
  return(
    <>
      <Route path="/" component={ NavComponent } />
      <Route exact path="/" component={ SplashComponent } />
      <Route path={`/businesses/:businessId`} component={ BusinessShowContainer } />
      <AuthRoute path="/signup" component={ SignUpComponent } />
      <AuthRoute path="/login" component={ LoginComponent } />
    </>
  )
};

export default App;