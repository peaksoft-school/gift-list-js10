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
            const newFriendsState = state
            newFriendsState.error = null
            newFriendsState.isLoading = true
         })
         .addCase(getFriends.fulfilled, (state, action) => {
            const newState = state
            newState.friendCard = action.payload?.map((item) => {
               return { ...item }
            })
            newState.isLoading = false
            newState.error = null
            return newState
         })
         .addCase(getFriends.rejected, (state, action) => {
            const errorState = state
            errorState.error = action.error.message
         })
   },
})
