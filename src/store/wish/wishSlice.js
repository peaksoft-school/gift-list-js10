import { createSlice } from '@reduxjs/toolkit'
import {
   getAllReservedWish,
   getWishById,
   getWishListByUserId,
} from './wishThunk'

const initialState = {
   wish: {},
   pending: false,
   error: null,
   wishes: [],
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
         .addCase(getWishListByUserId.pending, (state) => {
            return {
               ...state,
               wishes: [],
            }
         })
         .addCase(getWishListByUserId.fulfilled, (state, action) => {
            return {
               ...state,
               wishes: action.payload,
               error: null,
               isLoading: false,
            }
         })
         .addCase(getWishListByUserId.rejected, (state, action) => {
            return {
               ...state,
               error: action.error.message,
            }
         })
         .addCase(getAllReservedWish.pending, (state) => {
            return {
               ...state,
               erro: null,
               isLoading: true,
            }
         })
         .addCase(getAllReservedWish.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               error: null,
               wishes: action.payload,
            }
         })
         .addCase(getAllReservedWish.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
               isLoading: false,
            }
         })
   },
})
