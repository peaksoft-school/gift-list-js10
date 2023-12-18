import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'

export const putAllNotification = createAsyncThunk(
   '/notification/putAllNotification',
   async (notificationId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.put(
            `/notification/${notificationId}`
         )
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Успешно',
            'Ошибка',
            response.data
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

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
