import { combineReducers } from "redux";
import SessionReducer from "./session_reducer";
import EntitiesReducer from "./entitites/entities_reducer";
import ErrorsReducer from './errors/errors_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer,
  search: SearchReducer
})

export default RootReducer;