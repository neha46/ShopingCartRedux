import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice.js'

// configure store--
const store=configureStore({
    // combine all reducers
   reducer:{
    cart:CartReducer,
   }
})
export default store;