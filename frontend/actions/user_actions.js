import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = user =>({
    type: RECEIVE_USER,
    user
});

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const fetchUser = userId => dispatch =>(
  UserUtil.fetchUser( userId )
  .then( 
    user => dispatch(receiveUser(user)),
    errors => dispatch( receiveErrors( errors.responseJSON ))
  )
);

export const createUser = user => dispatch =>(
  UserUtil.createUser( user )
  .then( 
    user => dispatch(receiveUser(user)),
    errors => dispatch( receiveErrors( errors.responseJSON ))
  )
);

