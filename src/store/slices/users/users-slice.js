/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
   name: 'users',
   initialState: {
      userId: null,
   },
   reducers: {
      addUserId: (state, action) => {
         state.userId = action.payload
      },
   },
})
