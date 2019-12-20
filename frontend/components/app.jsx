import React from 'react';
import { Route } from 'react-router-dom';
import SignUpComponent from './session/sign_up_constructor';
import LoginComponent from './session/login_constructor';
import NavComponent from './nav/nav_component';
import BusinessShowContainer from './business/business_show_container';
import SplashComponent from './splash/splash_component';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SearchResults from './nav/search_results';
import Footer from './footer/footer';

const App = () =>{
  return(
    <>
      <Route path="/" component={ NavComponent } />
      <Route exact path="/" component={ SplashComponent } />
      <Route path ="/search" component={ SearchResults} />
      <Route path={`/businesses/:businessId`} component={ BusinessShowContainer } />
      <AuthRoute path="/signup" component={ SignUpComponent } />
      <AuthRoute path="/login" component={ LoginComponent } />
      <Route path="/" component={ Footer } />
    </>
  )
};

export default App;