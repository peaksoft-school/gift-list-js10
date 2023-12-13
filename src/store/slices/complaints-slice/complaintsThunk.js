import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../../utils/helpers/toast'

export const getWishesWithComplaints = createAsyncThunk(
   'complaints/charity',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            '/complaint/getAllWishesWithComplaints'
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
