import { createSlice } from '@reduxjs/toolkit'
import { getAllWishesByUserId, getWishById } from './wishThunk'
import { providerEvent } from '../../events/customEvents'

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
         .addCase(getAllWishesByUserId.fulfilled, (state, action) => {
            providerEvent({
               action: 'showActionsButton',
               payload: action.payload.length,
            })
            return {
               ...state,
               wishes: action.payload,
               loading: false,
               error: null,
            }
         })
         .addCase(getAllWishesByUserId.pending, (state) => {
            return { ...state, loading: true, error: null }
         })
         .addCase(getAllWishesByUserId.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
         })
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

export const { removeWish } = wishSlice.actions
export const selectWishes = (state) => state.wish.wishes
