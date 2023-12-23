import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'
import { axiosInstance } from '../../config/axiosInstance'

export const getAllMailings = createAsyncThunk(
   'mailing',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/mailings')
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

export const getMailingById = createAsyncThunk(
   'mailingById',
   async (mailingId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/mailings/${mailingId}`)
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

export const sendMailing = createAsyncThunk(
   'sendMailing',
   async (mailing, { rejectWithValue, dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Рассылка успешна отправлена',
            'Ошибка',
            axiosInstance.post('/mailings/send', mailing)
         )
         return dispatch(getAllMailings())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
