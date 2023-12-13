import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import wishSlice from './wish/wishSlice'
import { profileSlice } from './profile/profileSlice'

export const store = configureStore({
   reducer: {
      [wishSlice.name]: wishSlice.reducer,
      [authSlice.name]: authSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
   },
})
