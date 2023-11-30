import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const getRequestsFromUsers = createAsyncThunk(
   'myFriends/requests',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/myFriends/getAllRequest')
         return response.data
      } catch (error) {
         console.log(error)
         return rejectWithValue(error)
      }
   }
)
