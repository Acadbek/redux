import counterReducer from './counter'
import loggedInReducer from './loggedIn'
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedInReducer
})

export default allReducers