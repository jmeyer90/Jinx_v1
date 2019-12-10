import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import EntitiesReducer from "./entitites/entities_reducer";
import ErrorsReducer from './errors/errors_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
})

export default RootReducer;