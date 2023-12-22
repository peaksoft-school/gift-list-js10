import { createSlice } from '@reduxjs/toolkit'
import { getAllReservedWish } from './reservedThunk'

const initialState = {
   bookedWish: [],
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
            console.log(action.payload)
            return {
               ...state,
               isLoading: false,
               error: null,
               bookedWish: action.payload,
            }
         })
         .addCase(getAllReservedWish.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
               isLoading: false,
            }
         })
   },
})
