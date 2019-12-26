import React from 'react';

const LoginModal = props =>{


  return (
    <form onSubmit={(e) =>props.handleSubmit(e)} className="login-modal-form">
      <input className="login-modal-input" type="email" placeholder="Email"
        value={props.review.email} onChange={props.update("email")} required />
      <input className="login-modal-input" type="password" placeholder="Password"
        value={props.review.password} onChange={props.update("password")} required />
      <input className="login-modal-submit" type="submit" value="Log In" />
    </form>
  )
}

export default LoginModal;