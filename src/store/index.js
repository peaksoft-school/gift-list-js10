import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { bookingSlice } from './booking/bookingSlice'
import { charitySlice } from './charity/charitySlice'
import { complaintSlice } from './complaint/complaintSlice'
import { complaintsSlice } from './complaints-slice/complaintsSlice'
import { feedSlice } from './feed/feedSlice'
import { holidaySlice } from './holiday/holidaySlice'
import { mailingsSlice } from './mailing/mailingsSlice'
import { myFriendsSlice } from './my-friends/friendsSlice'
import { notificationSlice } from './notification/notificatiionSlice'
import { profileSlice } from './profile/profileSlice'
import { requestSlice } from './requests/requestSlice'
import { searchSlice } from './search/searchSlice'
import { usersSlice } from './slices/users/users-slice'
import { wishSlice } from './wish/wishSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [complaintSlice.name]: complaintSlice.reducer,
      [feedSlice.name]: feedSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [usersSlice.name]: usersSlice.reducer,
      [complaintsSlice.name]: complaintsSlice.reducer,
      [wishSlice.name]: wishSlice.reducer,
      [notificationSlice.name]: notificationSlice.reducer,
      [charitySlice.name]: charitySlice.reducer,
      [mailingsSlice.name]: mailingsSlice.reducer,
      [searchSlice.name]: searchSlice.reducer,
   },
})
