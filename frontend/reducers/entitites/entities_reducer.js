import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";

const EntitiesRedcuer = combineReducers({
  users: UsersReducer
});

export default EntitiesRedcuer;

