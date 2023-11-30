import { createSlice } from '@reduxjs/toolkit'
import { getWishListByUserId } from './wishThunk'

const initialState = {
   wishes: [],
   error: null,
   isLoading: false,
}

export const myFriendWishesSlice = createSlice({
   name: 'friendWishes',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getWishListByUserId.pending, (state) => {
            return {
               ...state,
            }
         })
         .addCase(getWishListByUserId.fulfilled, (state, action) => {
            console.log(action.payload)
            return {
               ...state,
               wishes: action.payload,
               error: null,
               isLoading: false,
            }
         })
         .addCase(getWishListByUserId.rejected, (state, action) => {
            return {
               ...state,
               error: action.error.message,
            }
         })
   },
})
