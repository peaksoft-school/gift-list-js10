import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

export const getWishListByUserId = createAsyncThunk(
   'user/friend/:friendId',
   async (friendId) => {
      try {
         const response = await axiosInstance.get(`/wishlists/user/${friendId}`)
         const result = response.data
         console.log(result)
         return result
      } catch (error) {
         console.log(error)
         return error
      }
   }
)
