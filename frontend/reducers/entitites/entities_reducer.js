import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import BusinessesReducer from './businesses_reducer';
import ReviewsReducer from './reviews_reducer';

const EntitiesRedcuer = combineReducers({
  users: UsersReducer,
  businesses: BusinessesReducer,
  review: ReviewsReducer
});

export default EntitiesRedcuer;

