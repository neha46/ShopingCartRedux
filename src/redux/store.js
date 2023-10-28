import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './CartSlice.js';
import ProductReducer from './ProductSlice.js'



// configure store--
const store=configureStore({
    // combine all reducers
   reducer:{
    cart:CartReducer,
    product:ProductReducer,
   }
})
export default store;