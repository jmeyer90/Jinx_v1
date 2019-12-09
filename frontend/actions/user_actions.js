import * as UserUtil from "../util/user_util";

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = user =>({
  type: RECEIVE_USER,
  user
});

export const fetchUser = userId =>(
  UserUtil.fetchUser( userId )
  .then( user => dispatch( receiveUser( user )))
);

export const createUser = user =>(
  UserUtil.createUser( user )
  .then( user => dispatch( receiveUser( user )))
);

