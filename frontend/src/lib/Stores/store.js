import { createStore, combineReducers } from "redux";
import authReducer from "../Reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
