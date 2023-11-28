import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { charitySlice } from './charity/charitySlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
   },
})
