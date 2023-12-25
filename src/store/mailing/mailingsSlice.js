import { createSlice } from '@reduxjs/toolkit'
import { getAllMailings, getMailingById } from './mailingsThunk'

const initialState = {
   mailings: [],
   mailing: {},
   error: null,
   isLoading: false,
}

export const mailingsSlice = createSlice({
   name: 'mailings',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllMailings.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getAllMailings.fulfilled, (state, action) => {
            return {
               ...state,
               mailings: action.payload,
               isLoading: false,
               error: null,
               mailing: null,
            }
         })
         .addCase(getAllMailings.rejected, (state, action) => {
            return {
               ...state,
               isLoading: false,
               error: action.payload,
            }
         })
         .addCase(getMailingById.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
               mailing: null,
               mailings: null,
            }
         })
         .addCase(getMailingById.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               mailing: action.payload,
               mailings: null,
               error: null,
            }
         })
         .addCase(getMailingById.rejected, (state, action) => {
            return {
               ...state,
               error: action.payload,
               isLoading: false,
               mailing: null,
               mailings: null,
            }
         })
   },
})
