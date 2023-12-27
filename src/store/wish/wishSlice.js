import { createSlice } from '@reduxjs/toolkit'
import { providerEvent } from '../../events/customEvents'
import {
   getAllReservedWish,
   getAllWishesByUserId,
   getWishById,
   getWishlistByWishId,
} from './wishThunk'

const initialState = {
   wish: {},
   isLoading: false,
   error: null,
   wishes: [],
}

export const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllWishesByUserId.fulfilled, (state, action) => {
            providerEvent({
               action: 'showActionsButton',
               payload: action.payload.length,
            })
            return {
               ...state,
               wishes: action.payload,
               isLoading: false,
               error: null,
            }
         })
         .addCase(getAllWishesByUserId.pending, (state) => {
            return { ...state, isLoading: true, error: null }
         })
         .addCase(getAllWishesByUserId.rejected, (state, action) => {
            return { ...state, error: action.payload, isLoading: false }
         })
         .addCase(getWishById.fulfilled, (state, { payload }) => ({
            ...state,
            wish: payload,
            isLoading: false,
            error: null,
         }))
         .addCase(getWishById.pending, (state) => ({
            ...state,
            isLoading: true,
            error: null,
         }))
         .addCase(getWishById.rejected, (state, { payload }) => ({
            ...state,
            isLoading: false,
            error: payload,
         }))
         .addCase(getWishlistByWishId.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               wishes: [],
            }
         })
         // .addCase(getWishListByUserId.fulfilled, (state, action) => {
         //    return {
         //       ...state,
         //       wishes: action.payload,
         //       error: null,
         //    }
         // })
         .addCase(getWishlistByWishId.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               wish: action.payload,
               error: null,
            }
         })
         .addCase(getWishlistByWishId.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
               isLoading: false,
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

export const { removeWish } = wishSlice.actions
export const selectWishes = (state) => state.wish.wishes
