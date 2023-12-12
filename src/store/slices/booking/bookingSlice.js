import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   pending: false,
   error: null,
}

export const bookingSlice = createSlice({
   name: 'bookingSlice',
   initialState,
   reducers: {},
})
