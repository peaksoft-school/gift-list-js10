import { createSlice } from '@reduxjs/toolkit'
import {
   getAllHolidaysByUserId,
   getHolidayByIdThunk,
   getHolidaysByUserId,
} from './holidayThunk'

const initialState = { holiday: {}, pending: false, holidays: [] }

export const holidaySlice = createSlice({
   name: 'holiday',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getHolidayByIdThunk.pending, (state) => ({
            ...state,
            pending: true,
         }))
         .addCase(getHolidayByIdThunk.fulfilled, (state, { payload }) => ({
            ...state,
            pending: false,
            holiday: payload,
         }))
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
         .addCase(getAllHolidaysByUserId.fulfilled, (state, { payload }) => ({
            ...state,
            holidays: payload,
            error: null,
            isloading: false,
         }))
   },
})
