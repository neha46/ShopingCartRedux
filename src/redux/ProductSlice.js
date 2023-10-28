import { createSlice } from "@reduxjs/toolkit" 
// creating enum by js
 export const STATUSES={
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',

}

//  createing Slices for stroing data--
const ProductSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.LOADING,

    },
    
    // reducer for state muation/change--
    reducers:{
        // for add cart
        setProducts(state,action){
            state.data=action.payload
        },
        // for remove cart
        setStatus(state,action){
            state.status=action.payload
        }
    }
});
export const {setProducts,setStatus}=ProductSlice.actions;
export default ProductSlice.reducer;

// first normal way to create thunk----
export function fetchProducts(){
    return async function fetchProductsThunk(dispatch,getState){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        // dispatch an action
        dispatch(setProducts(data))
        dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
