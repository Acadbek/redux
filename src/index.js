import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App'
import {Provider} from 'react-redux'
import allReducers from './reducers'
import {configureStore} from "@reduxjs/toolkit";
import userReducer from './features/user'

//const store = createStore(allReducers)

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
