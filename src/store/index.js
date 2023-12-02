import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { myFriendsSlice } from './slices/friendsSlice'
import { myFriendWishesSlice } from './slices/wishSlices'
import { profileSlice } from './slices/profileSlice'
import { holidaySlice } from './slices/holidaySlice'
import { requestSlice } from './slices/requestSlice'
import { bookingSlice } from './slices/bookingSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [myFriendWishesSlice.name]: myFriendWishesSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
   },
})
