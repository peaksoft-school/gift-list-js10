import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
// eslint-disable-next-line import/no-cycle
import { profileSlice } from './profile/profileSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
   },
})
