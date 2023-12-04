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
      addHoliday: (state) => {
         console.log(state)
      },
   },
})

export const { addHoliday } = holidaySlice.actions
