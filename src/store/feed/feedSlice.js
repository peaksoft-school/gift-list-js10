import { createSlice } from '@reduxjs/toolkit'
import { getFeedsThunk } from './feedThunk'
import { providerEvent } from '../../events/customEvents'

const initialState = {
   feeds: [],
   pending: false,
   error: null,
}

export const feedSlice = createSlice({
   name: 'feedSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getFeedsThunk.fulfilled, (state, { payload }) => {
            const feeds = Object.keys(payload).length
               ? [
                    ...(payload?.wishesResponses.map((response) => ({
                       ...response,
                       type: 'WISH',
                    })) || []),
                    ...(payload?.charityResponses.map((response) => ({
                       ...response,
                       type: 'CHARITY',
                    })) || []),
                    ...(payload?.holidayResponses.map((response) => ({
                       ...response,
                       type: 'HOLIDAY',
                    })) || {}),
                 ]
               : []
            providerEvent({
               action: 'showActionsButton',
               payload: feeds.length,
            })
            return {
               ...state,
               feeds,
               pending: false,
               error: null,
            }
         })
         .addCase(getFeedsThunk.pending, (state) => {
            return { ...state, pending: true, error: false }
         })
   },
})
