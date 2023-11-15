import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'

export const getFeedsThunk = createAsyncThunk(
   '/feed/getFeeds',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Вы вошли во вкладку лента',
            'Ошибка',
            axiosInstance.get('/users')
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const addToMyGifts = createAsyncThunk('/feed/addToMyGifts', async () => {
   try {
      const response = await axiosInstance.post()
      console.log(response)
      // return response
   } catch (error) {
      console.log(error)
      // return rejectWithValue(error)
   }
})
