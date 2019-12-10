import { combineReducers } from "redux";
import SessionErrors from './session_errors_reducer';
import UsersReducer from './users_error_reducer'

const ErrorsRedcuer = combineReducers({
  sessionErrors: SessionErrors,
  usersErros: UsersReducer
});

export default ErrorsRedcuer;