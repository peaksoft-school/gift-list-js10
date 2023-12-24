import { createSlice } from '@reduxjs/toolkit'
import { getWishesWithComplaints } from './complaintsThunk'

const initialState = {
   complaints: [],
   error: null,
   isLoading: false,
}

export const complaintsSlice = createSlice({
   name: 'complaints',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getWishesWithComplaints.pending, (state) => {
            return { ...state, isLoading: true, error: null }
         })
         .addCase(getWishesWithComplaints.fulfilled, (state, action) => {
            return {
               ...state,
               complaints: action.payload,
               isLoading: false,
               error: null,
            }
         })
         .addCase(getWishesWithComplaints.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.payload }
         })
   },
})
