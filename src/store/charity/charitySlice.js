import { createSlice } from '@reduxjs/toolkit'
import {
   getAllCharity,
   getAllCharityByUserId,
   getAllReservedCharity,
   getCharityById,
   searchCharity,
} from './charityThunk'
import { providerEvent } from '../../events/customEvents'

const initialState = {
   isLoading: false,
   error: null,
   charity: {},
   charities: [],
}

export const charitySlice = createSlice({
   name: 'charity',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllCharityByUserId.fulfilled, (state, { payload }) => {
            providerEvent({
               action: 'showActionsButton',
               payload: payload.length,
            })
            return {
               ...state,
               isLoading: false,
               error: null,
               charities: payload,
            }
         })
         .addCase(getAllCharityByUserId.pending, (state) => ({
            ...state,
            isLoading: true,
            error: false,
         }))
         .addCase(getCharityById.fulfilled, (state, { payload }) => ({
            ...state,
            isLoading: false,
            error: null,
            charity: payload,
         }))
         .addCase(getCharityById.pending, (state) => ({
            ...state,
            isLoading: true,
            error: null,
         }))
         .addCase(getCharityById.rejected, (state, { payload }) => ({
            ...state,
            isLoading: false,
            error: payload.message,
         }))
         .addCase(getAllCharity.fulfilled, (state, { payload }) => ({
            ...state,
            isLoading: false,
            error: null,
            charities: payload,
         }))
         .addCase(searchCharity.fulfilled, (state, { payload }) => {
            providerEvent({
               action: 'showActionsButton',
               payload: payload.length,
            })
            console.log(payload)
            return {
               ...state,
               isLoading: false,
               error: null,
               charities: payload?.filter((charity) => !charity.isBlock),
            }
         })
         .addCase(searchCharity.pending, (state) => ({
            ...state,
            isLoading: true,
            error: null,
         }))
         .addCase(searchCharity.rejected, (state, { payload }) => ({
            ...state,
            isLoading: false,
            error: payload,
         }))
         .addCase(getAllCharityByUserId.rejected, (state, action) => {
            return { ...state, isLoading: false, error: action.payload }
         })
         .addCase(getAllReservedCharity.pending, (state) => {
            return {
               ...state,
               isLoading: true,
               error: null,
            }
         })
         .addCase(getAllReservedCharity.fulfilled, (state, action) => {
            return {
               ...state,
               isLoading: false,
               charities: action.payload,
               error: null,
            }
         })
         .addCase(getAllReservedCharity.rejected, (state, action) => {
            return {
               ...state,
               isLoading: false,
               error: action.payload,
            }
         })
   },
})
