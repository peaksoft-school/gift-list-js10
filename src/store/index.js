import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { bookingSlice } from './booking/bookingSlice'
import { charitySlice } from './charity/charitySlice'
import { complaintSlice } from './complaint/complaintSlice'
import { complaintsSlice } from './complaints-slice/complaintsSlice'
import { feedSlice } from './feed/feedSlice'
import { holidaySlice } from './holiday/holidaySlice'
import { myFriendsSlice } from './my-friends/friendsSlice'
import { profileSlice } from './profile/profileSlice'
import { requestSlice } from './requests/requestSlice'
import { wishSlice } from './wish/wishSlice'
import { wishByIdSlice } from './wishesById/wishByIdSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [complaintSlice.name]: complaintSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [complaintsSlice.name]: complaintsSlice.reducer,
      [wishByIdSlice.name]: wishByIdSlice.reducer,
      [wishSlice.name]: wishSlice.reducer,
   },
})
