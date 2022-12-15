import { combineReducers } from "redux";
import places from "./places";
import search from "./search";
import map from "./map";

export default combineReducers({ places, search, map });
