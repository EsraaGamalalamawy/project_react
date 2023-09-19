import { combineReducers } from "redux";
import Reducer1 from "./reducer1";
import Reducer2 from "./reducer2";

export default combineReducers({
    red1:Reducer1,
    red2:Reducer2
})