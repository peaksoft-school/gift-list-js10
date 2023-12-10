import { createSlice } from '@reduxjs/toolkit'
import { getAllWishes, getWishById } from './wishThunk'

const initialState = {
   wishes: [],
   loading: false,
   error: null,
   wish: {},
}

const wishSlice = createSlice({
   name: 'wish',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllWishes.fulfilled, (state, action) => {
            return {
               ...state,
               wishes: action.payload,
               loading: false,
               error: null,
            }
         })
         .addCase(getAllWishes.pending, (state) => {
            return { ...state, loading: true, error: null }
         })
         .addCase(getAllWishes.rejected, (state, action) => {
            return { ...state, error: action.payload, loading: false }
         })
         .addCase(getWishById.fulfilled, (state, { payload }) => ({
            ...state,
            wish: payload,
         }))
   },
})

export const { removeWish } = wishSlice.actions
export const selectWishes = (state) => state.wish.wishes

export default wishSlice
