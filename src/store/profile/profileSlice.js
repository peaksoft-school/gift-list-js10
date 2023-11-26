import { createSlice } from '@reduxjs/toolkit'
import { getProfileThunk } from './profileThunk'

const initialState = {
   profile: {},
   error: null,
   pending: false,
}

export const profileSlice = createSlice({
   name: 'profileSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
            return { ...state, profile: payload, pending: false, error: false }
         })
         .addCase(getProfileThunk.pending, (state) => {
            return {
               ...state,
               pending: true,
               error: false,
            }
         })
         .addCase(getProfileThunk.rejected, (state, { payload }) => {
            return { ...state, pending: false, error: payload }
         })
   },
})
