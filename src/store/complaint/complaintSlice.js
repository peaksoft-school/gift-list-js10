import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   pending: false,
   error: null,
}

export const complaintSlice = createSlice({
   name: 'complaintSlice',
   initialState,
   reducers: {},
})
