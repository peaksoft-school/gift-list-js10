import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { profileSlice } from './profile/profileSlice'
import { charitySlice } from './charity/charitySlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
   },
})
