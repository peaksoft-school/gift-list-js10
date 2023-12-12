import { createSlice } from '@reduxjs/toolkit'
import { getCharitiesByUserId } from './chaririesThunk'

const initialState = {
   charities: [],
   error: null,
   isLoading: false,
}

export const charitiesSlice = createSlice({
   name: 'charities',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
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
