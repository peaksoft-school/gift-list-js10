import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../../../config/axiosInstance'

export const getFeedsThunk = createAsyncThunk(
   '/feed/getFeeds',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/feeds')
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
