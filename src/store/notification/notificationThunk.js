import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getNotification = createAsyncThunk(
   'notifications/getNotification',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/notification')
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Message',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const putAllNotification = createAsyncThunk(
   'notification/putAllNotification',
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.put('/notification')
         dispatch(getNotification())
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Message',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const putNotification = createAsyncThunk(
   'notification/putNotification',
   async (notificationId, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.put(`/notification/${notificationId}`)
         dispatch(getNotification())
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Message',
            error.message
         )
         rejectWithValue(error)
      }
   }
)
