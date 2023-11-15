import { configureStore } from '@reduxjs/toolkit'
import { feedSlice } from './feed/feedSlice'
import { authSlice } from './auth/authSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
   },
})
