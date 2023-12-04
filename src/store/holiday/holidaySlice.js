import { createSlice } from '@reduxjs/toolkit'
import { getHolidayByIdThunk } from './holidayThunk'

const initialState = { holiday: {}, pending: false }

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
   },
})
