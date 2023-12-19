import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { charitySlice } from './charity/charitySlice'
import { complaintSlice } from './complaint/complaintSlice'
import { feedSlice } from './feed/feedSlice'
import { profileSlice } from './profile/profileSlice'
import { bookingSlice } from './booking/bookingSlice'
import { holidaySlice } from './holiday/holidaySlice'
import { myFriendsSlice } from './my-friends/friendsSlice'
import { requestSlice } from './requests/requestSlice'
import { wishSlice } from './wish/wishSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [complaintSlice.name]: complaintSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [wishSlice.name]: wishSlice.reducer,
   },
})
