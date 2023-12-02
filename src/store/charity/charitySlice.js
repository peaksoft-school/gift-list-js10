import { createSlice } from '@reduxjs/toolkit'
import { getCharityById } from './charityThunk'

const initialState = {
   pending: false,
   error: null,
   charity: {},
}

export const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getCharityById.fulfilled, (state, { payload }) => ({
            ...state,
            pending: false,
            error: null,
            charity: payload,
         }))
         .addCase(getCharityById.pending, (state) => ({
            ...state,
            pending: true,
            error: null,
         }))
   },
})
