import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS"
export const USER_ERRORS = "USER_ERRORS";

const receiveUser = user =>({
    type: RECEIVE_USER,
    user
});

const userErrors = (errors) => {
  return {
    type: USER_ERRORS,
    errors
  }
}

export const fetchUser = userId => dispatch =>(
  UserUtil.fetchUser( userId )
  .then( 
    user => dispatch(receiveUser(user)),
    errors => dispatch( userErrors ( errors.responseJSON ))
  )
);

export const createUser = user => dispatch =>(
  UserUtil.createUser( user )
  .then( 
    user => dispatch(receiveUser(user)),
    errors => dispatch( userErrors ( errors.responseJSON ))
  )
);

