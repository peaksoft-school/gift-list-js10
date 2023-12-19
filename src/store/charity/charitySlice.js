import { createSlice } from '@reduxjs/toolkit'
import { getCharitiesByUserId, getCharityById } from './charityThunk'

const initialState = {
   isLoading: false,
   error: null,
   charity: {},
   charities: [],
}

export const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getCharityById.fulfilled, (state, { payload }) => ({
            ...state,
            isLoading: false,
            error: null,
            charity: payload,
         }))
         .addCase(getCharityById.pending, (state) => ({
            ...state,
            isLoading: true,
            error: null,
         }))
         .addCase(getCharitiesByUserId.pending, (state) => {
            return { ...state, isLoading: true, error: null }
         })
         .addCase(getCharitiesByUserId.fulfilled, (state, action) => {
            return {
               ...state,
               charities: action.payload,
               isLoading: false,
               error: null,
            }
         })
         .addCase(getCharitiesByUserId.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.payload }
         })
   },
})
