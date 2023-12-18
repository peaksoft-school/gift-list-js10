import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   notiofication: {},
   notifications: [],
}

export const notificationSlice = createSlice({
   name: 'notification',
   initialState,
   reducers: {},
})
