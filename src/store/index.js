import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { holidaySlice } from './holiday/holdiaySlice'
import { myFriendsSlice } from './slices/my-friends/friendsSlice'
import { myFriendWishesSlice } from './slices/wishes/wishSlices'
import { profileByIdSlice } from './slices/profile-slice/profileByIdSlice'
import { requestSlice } from './slices/requests/requestSlice'
import { bookingSlice } from './slices/booking/bookingSlice'
import { charitiesSlice } from './slices/charities/charitiesSlice'
import { profileSlice } from './profile/profileSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileByIdSlice.name]: profileByIdSlice.reducer,
      [myFriendWishesSlice.name]: myFriendWishesSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [charitiesSlice.name]: charitiesSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
   },
})
