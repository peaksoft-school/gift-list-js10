import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../../utils/helpers/toast'

export const getCharitiesByUserId = createAsyncThunk(
   '/charity',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `charity/myCharities?userId=${userId}`
         )
         const result = response.data
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
