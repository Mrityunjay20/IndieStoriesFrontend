//Redux store

import { configureStore } from "@reduxjs/toolkit";
import authReducer from './service/GlobalState.js'

export default configureStore({
    reducer:{
        loginauth:authReducer
    }
})