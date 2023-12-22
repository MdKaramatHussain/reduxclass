//  Here we are creating redux store with the help of createStore method provided by redux
// createStore method accepts reducer as its parameter

import  {createStore} from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import { applyMiddleware } from "redux";


// creating store
const store = createStore(rootReducer, applyMiddleware(logger))

export default store //exporting redux store
