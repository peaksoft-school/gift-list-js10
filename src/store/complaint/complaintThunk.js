import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { serializeObjectToQueryParams } from '../../utils/helpers/constants'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'

export const complaintWishThunk = createAsyncThunk(
   '/complaint/complaintWishThunk',
   async ({ wishId, complaintType, complaintCause }, { rejectWithValue }) => {
      try {
         const queryParams = serializeObjectToQueryParams({
            status: complaintType,
            text: complaintCause,
         })
         const response = toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Спасибо что сообщили нам об этом',
            'Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной средой для всех.',
            'Ошибка',
            axiosInstance.post(`/complaint/wish/${wishId}?${queryParams}`)
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const complaintCharityThunk = createAsyncThunk(
   '/complaint/complaintCharityThunk',
   async (
      { charityId, complaintType, complaintCause },
      { rejectWithValue }
   ) => {
      try {
         const queryParams = serializeObjectToQueryParams({
            status: complaintType,
            text: complaintCause,
         })
         const response = toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Спасибо что сообщили нам об этом',
            'Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной средой для всех.',
            'Ошибка',
            axiosInstance.post(`/complaint/charity/${charityId}?${queryParams}`)
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
