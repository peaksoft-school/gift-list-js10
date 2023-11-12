import { configureStore } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { feedSlice } from './slices/feed/feedSlice'
import { authSlice } from './slices/auth/authSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
   },
})
