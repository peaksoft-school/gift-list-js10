import { createSlice } from '@reduxjs/toolkit'
import { getAllHolidaysByUserId } from './holidayThunk'

const initialState = {
   nameOfHoliday: null,
   dateOfHoliday: null,
   image: null,
   holidays: [],
}

export const holidaySlice = createSlice({
   name: 'holidaySlice',
   initialState,
   reducers: {
      addHoliday: (state, { payload: { data } }) => {
         const newState = state
         newState.nameOfHoliday = data.nameOfHoliday
         newState.dateOfHoliday = data.dateOfHoliday
         newState.image = data.image
         return newState
      },
   },
   extraReducers: (builder) => {
      builder.addCase(
         getAllHolidaysByUserId.fulfilled,
         (state, { payload }) => {
            return { ...state, holidays: payload }
         }
      )
   },
})

export const { addHoliday } = holidaySlice.actions
