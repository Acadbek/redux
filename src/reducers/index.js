import counterReducer from './counter'
import loggedInReducer from './loggedIn'
import studentsReducer from "./students";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedInReducer,
    students: studentsReducer
})

export default allReducers