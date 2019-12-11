import * as SessionUtil from "../util/session_util";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SESSION_ERRORS = "SESSION_ERRORS";

const loginUser = userId =>({
  type: LOGIN_USER,
  userId
})
const logoutUser = () =>({
  type: LOGOUT_USER
})

const sessionErrors = (errors) => {
  return {
    type: SESSION_ERRORS,
    errors
  }
}

export const login = user => dispatch => (
  SessionUtil.createSession( user )
    .then( 
      user => dispatch( loginUser( user.id )),
      errors => dispatch( sessionErrors( errors.responseJSON ))
  )
);


export const logout = () => dispatch => (
  SessionUtil.deleteSession()
    .then( 
      () => dispatch(logoutUser()),
      errors => dispatch( sessionErrors( errors.responseJSON ))
    )
);