import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const getHolidaysByUserId = createAsyncThunk(
   '/friend/:friendId',
   async (friendId) => {
      try {
         const response = await axiosInstance.get(
            `/holidays/getAllHolidayFrends/${friendId}`
         )
         const result = response.data
         console.log(result)
         return result
      } catch (error) {
         console.log(error)
         return error
      }
   }
)
