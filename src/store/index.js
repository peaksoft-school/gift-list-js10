import { configureStore } from '@reduxjs/toolkit'
import { feedSlice } from './feed/feedSlice'
import { authSlice } from './auth/authSlice'
import { bookingSlice } from './booking/bookingSlice'
import { complaintSlice } from './complaint/complaintSlice'
import { charitySlice } from './charity/charitySlice'
import { wishSlice } from './wish/wishSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [complaintSlice.name]: complaintSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [wishSlice.name]: wishSlice.reducer,
   },
})
