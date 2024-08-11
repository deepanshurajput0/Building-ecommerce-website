import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    products:[],
    loading:false,
    error:null,
    messages:null
}


const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
       getProductsStart:(state)=>{ 
        state.loading = true 
       },
       getProductsSuccess:(state,action)=>{
         state.loading = false
         state.products = action.payload
       },
       getProductsFail:(state,action)=>{
        state.loading = false
        state.error = action.payload
       }
    }
})


export const { getProductsFail, getProductsSuccess, getProductsStart } = productSlice.actions

export default productSlice.reducer

