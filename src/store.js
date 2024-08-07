//Redux store

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./service/CartReducer.js";
import authReducer from './service/GlobalState.js'

export default configureStore({
    reducer:{
        loginauth:authReducer,
        cart: cartReducer,
    }
})