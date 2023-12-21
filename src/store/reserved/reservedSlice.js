import { createSlice } from '@reduxjs/toolkit'
import { getAllReservedCharity, getAllReservedWish } from './reservedThunk'

const initialState = {
   bookedWish: [],
   bookedCharity: [],
   isLoading: false,
   error: null,
}

export const reservedSlice = createSlice({
   name: 'booked',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllReservedWish.pending, (state) => {
            return {
               ...state,
               erro: null,
               isLoading: true,
            }
         })
         .addCase(getAllReservedWish.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               error: null,
               bookedWish: action.payload,
               bookedCharity: null,
            }
         })
         .addCase(getAllReservedWish.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
               isLoading: false,
            }
         })
         .addCase(getAllReservedCharity.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getAllReservedCharity.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               bookedCharity: action.payload,
               error: null,
            }
         })
         .addCase(getAllReservedCharity.rejected, (state, action) => {
            return {
               ...state,
               isLoading: false,
               error: action.payload,
            }
         })
   },
})
