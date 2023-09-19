import { createStore , applyMiddleware } from "redux";
import reduxThunk from "redux-thunk"
import reducers from "./index"

const toEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const Store=createStore(reducers, toEnhancer(applyMiddleware(reduxThunk)))
export default Store;