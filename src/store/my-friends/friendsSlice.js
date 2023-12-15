import { createSlice } from '@reduxjs/toolkit'
import { getFriends } from './friendsThunk'

const initialState = {
   friendCard: [],
   error: null,
   isLoading: false,
}

export const myFriendsSlice = createSlice({
   name: 'myFriends',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getFriends.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getFriends.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               friendCard: action.payload,
               error: null,
            }
         })
         .addCase(getFriends.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
            }
         })
   },
})
