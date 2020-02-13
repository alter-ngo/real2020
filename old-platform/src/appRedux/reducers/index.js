import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import Settings from "./Settings";


const reducers = combineReducers({
  routing: routerReducer,
  settings: Settings,
});

export default reducers;
