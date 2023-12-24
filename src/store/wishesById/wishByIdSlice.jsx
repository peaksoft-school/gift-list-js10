import { createSlice } from '@reduxjs/toolkit'
import { getWishlistByWishId } from './wishByIdThunk'

const initialState = {
   wish: [],
   isLoading: false,
   error: null,
}

export const wishByIdSlice = createSlice({
   name: 'wishById',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getWishlistByWishId.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getWishlistByWishId.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               wish: action.payload,
               error: null,
            }
         })
         .addCase(getWishlistByWishId.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
               isLoading: false,
            }
         })
   },
})
