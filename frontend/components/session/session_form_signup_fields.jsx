import React from 'react';

const SessionSignupField = props =>{

  if ( props.formType === "Sign Up" ) {

    let { f_name, l_name, zip_code } = props.user;

    return (
      <>
        <section className="name-section">
          <label>
            <input className="user-name" type="f_name" placeholder="First Name" value={f_name} onChange={props.update("f_name")} required />
          </label>
          <label>
            <input className="user-name" type="l_name" placeholder="Last Name" value={l_name} onChange={props.update("l_name")} required />
          </label>
        </section>
        <label>
          <input type="integer" placeholder="Zip Code" value={zip_code} onChange={props.update("zip_code")} required />
        </label>
      </>
    )
  } else {
    return <></>
  }
}

export default SessionSignupField;