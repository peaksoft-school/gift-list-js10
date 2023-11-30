import { createSlice } from '@reduxjs/toolkit'
import { getAllCharityByUserId, getCharityById } from './charityThunk'

const initialState = {
   charities: [],
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
         .addCase(getAllCharityByUserId.fulfilled, (state, { payload }) => ({
            ...state,
            pending: false,
            error: null,
            charities: payload,
         }))
         .addCase(getAllCharityByUserId.pending, (state) => ({
            ...state,
            pending: true,
            error: false,
         }))
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
