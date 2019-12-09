import React from 'react';
import { Route } from 'react-router-dom';
import SignUpComponent from './session/signup_component';

const App = () =>{
  return(
    <>
      <h1>App Component</h1>
      <Route path="/signup" component={ SignUpComponent } />
    </>
  )
};

export default App;