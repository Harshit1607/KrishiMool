import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import stateProfileReducer from "./Reducers/stateProfile";
import { thunk } from "redux-thunk";
import dashboardReducer from "./Reducers/dashboard";


const RootReducer = combineReducers({
  dashboard: dashboardReducer,
  stateProfile: stateProfileReducer,
})

const store = legacy_createStore(RootReducer, applyMiddleware(thunk));

export default store;