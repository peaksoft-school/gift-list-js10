import { createSlice } from '@reduxjs/toolkit'
import { getProfileByUserId, getProfileThunk } from './profileThunk'

const initialState = {
   profile: {},
   error: null,
   friendId: 0,
   isLoading: false,
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
            return {
               ...state,
               profile: payload,
               isLoading: false,
               error: false,
            }
         })
         .addCase(getProfileThunk.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: false,
            }
         })
         .addCase(getProfileThunk.rejected, (state, { payload }) => {
            return { ...state, isLoading: false, error: payload }
         })
         .addCase(getProfileByUserId.pending, (state) => {
            return {
               ...state,
            }
         })
         .addCase(getProfileByUserId.fulfilled, (state, action) => {
            return {
               ...state,
               friendId: action.payload,
               error: null,
               isLoading: false,
            }
         })
         .addCase(getProfileByUserId.rejected, (state, action) => {
            return {
               ...state,
               error: action.error.message,
            }
         })
   },
})
