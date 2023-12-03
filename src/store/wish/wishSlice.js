import { createSlice } from '@reduxjs/toolkit'
import { getWishById } from './wishThunk'

const initialState = {
   wish: {},
   pending: false,
   error: null,
}

export const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getWishById.fulfilled, (state, { payload }) => ({
            ...state,
            wish: payload,
            pending: false,
            error: null,
         }))
         .addCase(getWishById.pending, (state) => ({
            ...state,
            pending: true,
            error: null,
         }))
         .addCase(getWishById.rejected, (state, { payload }) => ({
            ...state,
            pending: false,
            error: payload,
         }))
   },
})
