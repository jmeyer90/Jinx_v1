import * as SessionUtil from "../util/session_util";

export const LOGOUT_USER = "LOGOUT_USER";
export const LOGIN_USER = "LOGIN_USER";

const loginUser = userId =>({
  type: LOGIN_USER,
  userId
})
const logoutUser = () =>({
  type: LOGOUT_USER
})

export const login = user => (
  SessionUtil.createSesseion( user )
    .then( user => dispatch( loginUser( user.id )))
);


export const logout = () => (
  SessionUtil.deleteSession()
    .then( () => logoutUser())
);