import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../../utils/helpers/toast'

export const getWishlistByWishId = createAsyncThunk(
   'wish/wishId',
   async (wishId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/wishlists/${wishId}`)
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)
