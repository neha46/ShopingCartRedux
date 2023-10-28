import { createSlice } from "@reduxjs/toolkit" 

// set empty initiaState--
 const initialState=[];

//  createing Slices for stroing data--
const CartSlice=createSlice({
    name:"cart",
    initialState,

    // reducer for state muation/change--
    reducers:{
        // for add cart
        add(state,action){
            state.push(action.payload)
        },
        // for remove cart
        remove(state,action){
            return state.filter(item=>item.id !== action.payload)
        }
    }
});
export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;
