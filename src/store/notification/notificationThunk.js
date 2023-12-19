import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   //    toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getNotification = createAsyncThunk(
   'notifications/getNotification',
   async (adminId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/notification/admin/${adminId}`
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

// export const putAllNotification = createAsyncThunk(
//    '',
//    async (notificationId, { rejectWithValue }) => {
//       try {
//          const response = await axiosInstance.put(
//             `/notification/${notificationId}`
//          )
//          toastWithPromise(
//             notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
//             notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
//             'Успешно',
//             'Ошибка',
//             'Уведомления отмечены как прочитанные'
//          )
//          return response.data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// export const putAllNotification = createAsyncThunk(
//    '/notification/putAllNotification',
//    async (notificationId, { rejectWithValue }) => {
//       try {
//          const response = await axiosInstance.put(
//             `/notification/${notificationId}`
//          )
//          await toastWithPromise(
//             notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
//             notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
//             'Успешно',
//             'Ошибка',
//             response.data
//          )

//          return response.data
//       } catch (error) {
//          return rejectWithValue(error.message)
//       }
//    }
// )

// export const putAllNotification = createAsyncThunk(
//    '/notification/putAllNotification',
//    async (notificationId, { rejectWithValue }) => {
//       try {
//          const response = await toastWithPromise(
//             notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
//             notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
//             'Успешно',
//             'Ошибка',
//             axiosInstance.put(`/notification/${notificationId}`)
//             error.message
//          )
//          return response.data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

// notificationThunk.js
