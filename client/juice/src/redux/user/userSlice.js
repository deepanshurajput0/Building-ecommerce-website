import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    isAuthenticated:false,
    loading:false
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signupStart:(state)=>{
          state.loading = true
        },
        signupSuccess:(state,action)=>{
         state.loading = false
         state.isAuthenticated = true
         state.currentUser = action.payload
         state.error = null
        },
        signupFail:(state,action)=>{
         state.loading = false
         state.isAuthenticated = false
         state.error = action.payload
        
        },
        loginStart:(state,action)=>{
          state.loading = true
        },
        loginSuccess:(state,action)=>{
          state.loading = false,
          state.isAuthenticated = true
          state.currentUser = action.payload
          state.error = null
        },
        loginFail:(state,action)=>{
         state.loading = false
         state.isAuthenticated = false
         state.error = action.payload
        
        },
        loadUserStart:(state,action)=>{
           state.loading = true
        },
        loadUserSuccess:(state,action)=>{
           state.loading = false
           state.isAuthenticated = true,
           state.currentUser = action.payload
           state.error = null
        },
        loadUserFail:(state,action)=>{
           state.loading = false
           state.isAuthenticated = false,
           state.error = action.payload
        }
    }
})


export const { signupStart, signupSuccess, signupFail, loginStart, loginSuccess, loginFail,loadUserSuccess, loadUserStart, loadUserFail } = userSlice.actions

export default userSlice.reducer


