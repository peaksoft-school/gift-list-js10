import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getCharityById = createAsyncThunk(
   '/charity/getCharityById',
   async (charityId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/charity/${charityId}`)
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

export const getCharitiesByUserId = createAsyncThunk(
   '/charity',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `charity/myCharities?userId=${userId}`
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
