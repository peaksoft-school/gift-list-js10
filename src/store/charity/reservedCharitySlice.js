import { createSlice } from '@reduxjs/toolkit'
import { getAllReservedCharity } from './reservedCharityThunk'

const initialState = {
   bookedCharity: [],
   isLoading: false,
   error: null,
}

export const reservedCharitySlice = createSlice({
   name: 'bookedCharity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllReservedCharity.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getAllReservedCharity.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               bookedCharity: action.payload,
               error: null,
            }
         })
         .addCase(getAllReservedCharity.rejected, (state, action) => {
            return {
               ...state,
               isLoading: false,
               error: action.payload,
            }
         })
   },
})
