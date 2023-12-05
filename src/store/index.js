import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { myFriendsSlice } from './slices/my-friends/friendsSlice'
import { myFriendWishesSlice } from './slices/wishes/wishSlices'
import { profileSlice } from './slices/profile-slice/profileSlice'
import { holidaySlice } from './slices/holidays/holidaySlice'
import { requestSlice } from './slices/requests/requestSlice'
import { bookingSlice } from './slices/booking/bookingSlice'
import { charitiesSlice } from './slices/charities/charitiesSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [myFriendWishesSlice.name]: myFriendWishesSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [charitiesSlice.name]: charitiesSlice.reducer,
   },
})
