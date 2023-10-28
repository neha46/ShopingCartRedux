import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" 
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
        data:null,
        status:STATUSES.LOADING,

    },
    
    // reducer for state muation/change--
    //syntax for simple thunk method----------------------------
    reducers:{
        // for add cart
        // setProducts(state,action){
        //     state.data=action.payload
        // },
        // for remove cart
        // setStatus(state,action){
        //     state.status=action.payload
        // }

    },
    // syntax for CreateAsyncThunk method in which we use extraReducers--------------------
    extraReducers:(builder)=>{
        // chaining
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status=STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data=action.payload
            state.status=STATUSES.IDLE
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status=STATUSES.ERROR
        })
    }
});
export const {setProducts,setStatus}=ProductSlice.actions;
export default ProductSlice.reducer;



// first normal way to create thunk----
// export function fetchProducts(){
//     return async function fetchProductsThunk(dispatch,getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         // dispatch an action
//         dispatch(setProducts(data))
//         dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }


// rejuxjs/toolkit thunk method----------
export const fetchProducts=createAsyncThunk('product/fetch',async()=>{
    const res = await fetch('https://fakestoreapi.com/products');
        const Mydata = await res.json();
        return Mydata;

})
