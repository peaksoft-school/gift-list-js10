import { createSlice } from '@reduxjs/toolkit'
import { getAllHolidaysByUserId, getAllWishesByHolidayId } from './holidayThunk'

const initialState = {
   // nameOfHoliday: null,
   // dateOfHoliday: null,
   // image: null,
   holidays: [],
   wishesByHolidayId: [],
}

export const holidaysSlice = createSlice({
   name: 'holidaySlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(
         getAllHolidaysByUserId.fulfilled,
         (state, { payload }) => {
            return { ...state, holidays: payload }
         }
      )
      builder.addCase(
         getAllWishesByHolidayId.fulfilled,
         (state, { payload }) => {
            return { ...state, wishesByHolidayId: payload }
         }
      )
   },
})
