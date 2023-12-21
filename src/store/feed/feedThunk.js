import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getFeedsThunk = createAsyncThunk(
   '/feed/getFeeds',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/feeds/feedResponse/${userId}`
         )
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
   async (payload, { rejectWithValue, dispatch }) => {
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
         dispatch(getFeedsThunk(userId))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
