import { createAsyncThunk } from '@reduxjs/toolkit'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'
import { axiosInstance } from '../../config/axiosInstance'
import { addHoliday } from './holdiaySlice'

export const addHolidayQuery = createAsyncThunk(
   'holiday/add holiday',
   async ({ userData, image }, { rejectWithValue, dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы вошли в аккаунт',
            'Ошибка',
            axiosInstance.post('/holidays', { ...userData, image })
         )
         console.log(response)
         return dispatch(addHoliday({ data: response.data }))
      } catch (error) {
         // TODO: toast without promise error
         return rejectWithValue(error)
      }
   }
)

export const getAllHolidaysByUserId = createAsyncThunk(
   'holiday/getAllHolidaysByUserId',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/holidays/getHolidaysByUserId/${userId}`
         )
         return response.data
      } catch (error) {
         // TODO: toast without promise error
         return rejectWithValue(error)
      }
   }
)
