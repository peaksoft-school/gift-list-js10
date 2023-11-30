import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getProfileByUserId = createAsyncThunk(
   'user/friends/:friendId',
   async (friendId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/user/${friendId}`)
         const result = response.data
         console.log(result)
         return result
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
