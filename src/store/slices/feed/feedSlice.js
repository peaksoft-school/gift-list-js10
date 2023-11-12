import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { getFeedsThunk } from './feedThunk'

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
      builder.addCase(getFeedsThunk.fulfilled, (state, { payload }) => {
         return {
            ...state,
            feeds: payload,
            pending: false,
            error: null,
         }
      })
   },
})

// export const {} = feedSlice.actions
