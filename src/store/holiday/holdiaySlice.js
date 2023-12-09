import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   nameOfHoliday: null,
   dateOfHoliday: null,
   image: null,
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
})

export const { addHoliday } = holidaySlice.actions
