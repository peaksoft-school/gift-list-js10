import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getAllReservedWish = createAsyncThunk(
   'reservedWish',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/booking/getAllReservedWish')
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка при получении всех забронированных подарков!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const getAllReservedCharity = createAsyncThunk(
   'reservedCharity',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            '/booking/getAllReservedCharity'
         )
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка при получении всех забронированных благотворительностей!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)
