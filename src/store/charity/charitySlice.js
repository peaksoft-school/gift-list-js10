import { createSlice } from '@reduxjs/toolkit'
import { getAllCharity, getCharityById } from './charityThunk'

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
         .addCase(getAllCharity.fulfilled, (state, { payload }) => ({
            ...state,
            pending: false,
            error: null,
            charities: payload,
         }))
         .addCase(getAllCharity.pending, (state) => ({
            ...state,
            pending: true,
            error: false,
         }))
         .addCase(getAllCharity.rejected, (state, secondParameter) => {
            // TODO: remove it and write it in thunk into catch statement: toastWithoutPromise:ERROR
            console.log(state, secondParameter)
         })
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
         .addCase(getCharityById.rejected, (state, secondParameter) => {
            // TODO: remove it and write it in thunk into catch statement: toastWithoutPromise:ERROR
            console.log(state, secondParameter)
         })
   },
})
