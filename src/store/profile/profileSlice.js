import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { getProfileThunk } from './profileThunk'

const initialState = {
   profile: {},
   error: null,
   pending: false,
}

export const profileSlice = createSlice({
   name: 'profileSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getProfileThunk.fulfilled, (state, { payload }) => {
         return { ...state, profile: payload }
      })
   },
})
