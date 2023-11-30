import { createSlice } from '@reduxjs/toolkit'
import { getProfileByUserId } from './profileThunk'

const initialState = {
   friendId: [],
   error: null,
   isLoading: false,
}

export const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProfileByUserId.pending, (state) => {
            return {
               ...state,
            }
         })
         .addCase(getProfileByUserId.fulfilled, (state, action) => {
            console.log(action.payload)
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
