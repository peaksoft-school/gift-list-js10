import { createSlice } from '@reduxjs/toolkit'
import { getSearchHolidays, getSearchWish, getUsersSearch } from './searchThunk'

const initialState = {
   searchResult: { type: '', result: [] },
   isLoading: false,
   errror: null,
}

export const searchSlice = createSlice({
   name: 'search',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getSearchWish.pending, (state) => {
            return {
               ...state,
               error: null,
               isLoading: true,
            }
         })
         .addCase(getSearchWish.fulfilled, (state, action) => {
            return {
               ...state,

               searchResult: { result: action.payload, type: 'WISH' },
               error: null,
               isLoading: false,
            }
         })
         .addCase(getSearchWish.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
            }
         })
         .addCase(getSearchHolidays.pending, (state) => {
            return {
               ...state,
               error: null,
               isloading: true,
            }
         })
         .addCase(getSearchHolidays.fulfilled, (state, action) => {
            return {
               ...state,
               searchResult: { result: action.payload, type: 'HOLIDAY' },
               isloading: false,
               error: null,
            }
         })
         .addCase(getSearchHolidays.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
            }
         })
         .addCase(getUsersSearch.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getUsersSearch.fulfilled, (state, action) => {
            return {
               ...state,
               searchResult: { result: action.payload, type: 'USER' },
               error: null,
               isLoading: false,
            }
         })
         .addCase(getUsersSearch.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
            }
         })
   },
})
