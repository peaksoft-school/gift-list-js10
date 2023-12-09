import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { holidaySlice } from './holiday/holdiaySlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
   },
})
