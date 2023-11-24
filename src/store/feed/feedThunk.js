import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getFeedsThunk = createAsyncThunk(
   '/feed/getFeeds',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/feeds')
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const addToMyGifts = createAsyncThunk(
   '/feed/addToMyGifts',
   async (payload, { rejectWithValue }) => {
      try {
         const { userId, wishId } = payload
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Подарок успешно добавлен в список желаний',
            'Ошибка',
            axiosInstance.post(`/feeds/assign/${wishId}/${userId}`)
         )
         return response
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
