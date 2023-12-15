import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { myFriendsSlice } from './slices/my-friends/friendsSlice'
import { myFriendWishesSlice } from './slices/wishes/wishSlices'
import { profileByIdSlice } from './slices/profile-slice/profileByIdSlice'
import { holidaySlice } from './slices/holidays/holidaySlice'
import { requestSlice } from './slices/requests/requestSlice'
import { bookingSlice } from './booking/bookingSlice'
import { charitiesSlice } from './charities/charitiesSlice'
import { profileSlice } from './profile/profileSlice'
import { complaintsSlice } from './complaints-slice/complaintsSlice'
import { wishByIdSlice } from './wishesById/wishByIdSlice'

export const store = configureStore({
   reducer: {
      [authSlice.name]: authSlice.reducer,
      [myFriendsSlice.name]: myFriendsSlice.reducer,
      [profileByIdSlice.name]: profileByIdSlice.reducer,
      [myFriendWishesSlice.name]: myFriendWishesSlice.reducer,
      [holidaySlice.name]: holidaySlice.reducer,
      [requestSlice.name]: requestSlice.reducer,
      [bookingSlice.name]: bookingSlice.reducer,
      [charitiesSlice.name]: charitiesSlice.reducer,
      [profileSlice.name]: profileSlice.reducer,
      [complaintsSlice.name]: complaintsSlice.reducer,
      [wishByIdSlice.name]: wishByIdSlice.reducer,
   },
})
