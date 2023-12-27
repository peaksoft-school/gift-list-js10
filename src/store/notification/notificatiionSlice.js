import { createSlice } from '@reduxjs/toolkit'
import { getNotification } from './notificationThunk'

const initialState = {
   notifications: [],
}

export const notificationSlice = createSlice({
   name: 'notification',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getNotification.pending, (state) => {
            return { ...state, loading: true, error: null }
         })
         .addCase(getNotification.fulfilled, (state, action) => {
            return {
               ...state,
               loading: false,
               error: null,
               notifications: action.payload.notificationResponseList,
            }
         })
         .addCase(getNotification.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
         })
   },
})
