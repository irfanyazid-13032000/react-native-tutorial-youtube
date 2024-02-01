import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const authSlice = createSlice({
  name:"auths",
  initialState:{
    token:"",
    role:""
  },
  reducers:{
    storeToken:(state,action) => {
      state.token = action.payload.token
      state.role = action.payload.role
    },
    deleteToken:(state) => {
      state.token = ""
    }
  }
})


export const {storeToken,deleteToken} = authSlice.actions

export default authSlice.reducer