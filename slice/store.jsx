import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./authSlice"

const store = configureStore({
  reducer:{
    auths:authReducer
  }
})

export default store