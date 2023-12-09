import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { holidaySlice } from './holiday/holdiaySlice'
// eslint-disable-next-line import/no-cycle
import { profileSlice } from './profile/profileSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
   },
})
