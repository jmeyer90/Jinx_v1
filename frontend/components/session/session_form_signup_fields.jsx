import React from 'react';

const SessionSignupField = props =>{

  if ( props.formType === "Sign Up" ) {

    let { f_name, l_name, zip_code } = props.user;

    return (
      <>
        <section className="name-section">
          <label>
            <input id="name" type="f_name" placeholder="First Name" value={ f_name } onChange={ props.update( "f_name" )} />
          </label>
          <label>
            <input id="name" type="l_name" placeholder="Last Name" value={ l_name } onChange={ props.update( "l_name" )} />
          </label>
        </section>
        <label>
          <input type="integer" placeholder="Zip Code" value={ zip_code } onChange={ props.update( "zip_code" )} />
        </label>
      </>
    )
  } else {
    return <></>
  }
}

export default SessionSignupField;