import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null,
    error:null,
    isAuthenticated:false,
    loading:false,
    message:null
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
         state.message = action.payload.message;
        },
        signupFail:(state,action)=>{
         state.loading = false
         state.isAuthenticated = false
         state.error = action.payload.message
        
        },
        loginStart:(state,action)=>{
          state.loading = true
        },
        loginSuccess:(state,action)=>{
          state.loading = false,
          state.isAuthenticated = true
          state.currentUser = action.payload
          state.message = action.payload.message;
        },
        loginFail:(state,action)=>{
         state.loading = false
         state.isAuthenticated = false
         state.error = action.payload.message
        
        },
        loadUserStart:(state,action)=>{
           state.loading = true
        },
        loadUserSuccess:(state,action)=>{
           state.loading = false
           state.isAuthenticated = true,
           state.currentUser = action.payload
        },
        loadUserFail:(state,action)=>{
           state.loading = false
           state.isAuthenticated = false,
           state.error = action.payload.message
        },
        logoutStart:(state,action)=>{
         state.loading = true
        },
        logoutSuccess:(state,action)=>{
         state.loading = false
         state.isAuthenticated = false,
         state.currentUser = null
         state.message = action.payload.message;
        },
        logoutFail:(state,action)=>{
         state.loading = false
         state.isAuthenticated = false
         state.error = action.payload.message
        }
    }
})


export const { signupStart, signupSuccess, signupFail, loginStart, loginSuccess, loginFail,loadUserSuccess, loadUserStart, loadUserFail, logoutFail, logoutSuccess, logoutStart } = userSlice.actions

export default userSlice.reducer


