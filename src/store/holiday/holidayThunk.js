import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { extractNumberFromMessage } from '../../utils/helpers/constants'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getHolidayByIdThunk = createAsyncThunk(
   '/holiday/getHolidayById',
   async (holidayId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/holidays/${holidayId}`)
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

export const getHolidaysByUserId = createAsyncThunk(
   '/friend/:friendId',
   async (friendId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/holidays/getAllHolidayFrends/${friendId}`
         )
         const result = response.data

         return result
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const getAllHolidaysByUserId = createAsyncThunk(
   '/holiday/getAllHolidaysByUserId',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/holidays/getHolidaysByUserId/${userId}`
         )
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const addHolidayQuery = createAsyncThunk(
   'holiday/add holiday',
   async (
      { userData, image, userId, setDefaultHolidayId },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Праздник успешно добавлен',
            'Ошибка при добавлений подарка',
            axiosInstance.post('/holidays', { ...userData, image })
         )
         setDefaultHolidayId(extractNumberFromMessage(response.data.message))
         dispatch(getAllHolidaysByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const updateHolidayQuery = createAsyncThunk(
   'holiday/update holiday',
   async (
      { holidayId, userData, image, userId },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Праздник успешно изменен',
            'Ошибка при изменении подарка',
            axiosInstance.put(`/holidays/${holidayId}`, { ...userData, image })
         )
         dispatch(getAllHolidaysByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const deleteHolidayById = createAsyncThunk(
   'holiday/deleteHolidayById',
   async ({ holidayId, userId }, { rejectWithValue, dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Праздник успешно удален',
            'Ошибка при удалении подарка',
            axiosInstance.delete(`/holidays/${holidayId}`)
         )
         dispatch(getAllHolidaysByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
export const getAllWishesByHolidayId = createAsyncThunk(
   'holiday/getAllWishesByHolidayId',
   async (holidayId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/holidays/getAllWish/${holidayId}`
         )
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)
