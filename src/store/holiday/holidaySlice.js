import { createSlice } from '@reduxjs/toolkit'
import {
   getAllHolidaysByUserId,
   getAllWishesByHolidayId,
   getHolidayByIdThunk,
   getHolidaysByUserId,
} from './holidayThunk'

const initialState = {
   wishesByHolidayId: [],
   pending: false,
   holidays: [],
   holiday: {},
}

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
         .addCase(getAllWishesByHolidayId.fulfilled, (state, { payload }) => {
            return { ...state, wishesByHolidayId: payload }
         })
         .addCase(getAllHolidaysByUserId.fulfilled, (state, { payload }) => ({
            ...state,
            holidays: payload,
            error: null,
            pending: false,
         }))
         .addCase(getAllHolidaysByUserId.rejected, (state, { payload }) => ({
            ...state,
            error: payload,
            pending: false,
         }))
         .addCase(getAllHolidaysByUserId.pending, (state) => ({
            ...state,
            error: null,
            pending: true,
         }))
   },
})
