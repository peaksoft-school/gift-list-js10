import { createAsyncThunk } from '@reduxjs/toolkit'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'
import { axiosInstance } from '../../config/axiosInstance'

export const addHoliday = createAsyncThunk(
   'holiday/add holiday',
   async ({ userData, image }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы вошли в аккаунт',
            'Ошибка',
            axiosInstance.post('/holidays', userData, image)
         )
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   }
)
