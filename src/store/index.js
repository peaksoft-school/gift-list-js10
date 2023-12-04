import { configureStore } from '@reduxjs/toolkit'
import { feedSlice } from './feed/feedSlice'
import { authSlice } from './auth/authSlice'
import { profileSlice } from './profile/profileSlice'
import { bookingSlice } from './booking/bookingSlice'
import { complaintSlice } from './complaint/complaintSlice'
import { charitySlice } from './charity/charitySlice'
import { wishSlice } from './wish/wishSlice'
import { holidaySlice } from './holiday/holidaySlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [complaintSlice.name]: complaintSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [wishSlice.name]: wishSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
   },
})
