import { configureStore } from '@reduxjs/toolkit'
import { feedSlice } from './feed/feedSlice'
import { authSlice } from './auth/authSlice'
import { requestSlice } from './requests/requestSlice'
import { profileSlice } from './profile/profileSlice'
import { complaintSlice } from './complaint/complaintSlice'
import { charitySlice } from './charity/charitySlice'
import { wishSlice } from './wish/wishSlice'
import { myFriendsSlice } from './my-friends/friendsSlice'
import { holidaySlice } from './holiday/holidaySlice'
import { bookingSlice } from './booking/bookingSlice'
import { complaintsSlice } from './complaints-slice/complaintsSlice'
import { wishByIdSlice } from './wishesById/wishByIdSlice'
import { MailingSlice } from './mailing/MailingSlice'

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
      [complaintsSlice.name]: complaintsSlice.reducer,
      [wishByIdSlice.name]: wishByIdSlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [wishSlice.name]: wishSlice.reducer,
      [MailingSlice.name]: MailingSlice.reducer,
   },
})
