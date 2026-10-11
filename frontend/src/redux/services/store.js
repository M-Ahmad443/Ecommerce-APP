import authReducer from "../features/authSlice"
import {configureStore} from "@reduxjs/toolkit"
import productReducer from "../features/productSlice"

 export const store = configureStore({
    reducer:{
        auth:authReducer,
        product:productReducer
    }
})
export default store