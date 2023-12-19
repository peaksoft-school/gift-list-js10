import { createSlice } from '@reduxjs/toolkit'
import { getRequestsFromUsers } from './requestThunk'

const initialState = {
   requests: [],
   error: null,
   isLoading: false,
}

export const requestSlice = createSlice({
   name: 'requests',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getRequestsFromUsers.pending, (state) => {
            return { ...state, isLoading: true }
         })
         .addCase(getRequestsFromUsers.fulfilled, (state, action) => {
            return { ...state, requests: action.payload, isLoading: false }
         })
         .addCase(getRequestsFromUsers.rejected, (state, action) => {
            return { ...state, error: action.payload }
         })
   },
})
