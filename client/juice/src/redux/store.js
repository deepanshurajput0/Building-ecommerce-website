import { configureStore } from '@reduxjs/toolkit'
import userReducer from './../redux/user/userSlice.js'
import productReducer from './../redux/user/productSlice.js'
export const store = configureStore({
    reducer:{
        user:userReducer,
        products:productReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false
    }),
})



