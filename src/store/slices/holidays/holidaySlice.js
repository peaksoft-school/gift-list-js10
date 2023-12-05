import { createSlice } from '@reduxjs/toolkit'
import { getHolidaysByUserId } from './holidayThunk'

const initialState = {
   holidays: [],
   error: null,
   isloading: false,
}

export const holidaySlice = createSlice({
   name: 'holidays',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getHolidaysByUserId.pending, (state) => {
            return {
               ...state,
               isloading: true,
               error: null,
            }
         })
         .addCase(getHolidaysByUserId.fulfilled, (state, action) => {
            return {
               ...state,
               holidays: action.payload,
               error: null,
               isloading: false,
            }
         })
         .addCase(getHolidaysByUserId.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
            }
         })
   },
})
