import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getRequestsFromUsers = createAsyncThunk(
   'myFriends/requests',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/myFriends/getAllRequest')
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
