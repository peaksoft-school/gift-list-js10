import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getWishesWithComplaints = createAsyncThunk(
   'complaints/wish',
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

export const deleteWishById = createAsyncThunk(
   'delete/wish',
   async (wishId, { dispatch, rejectWithValue }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Пожелание успешно удалено!',
            'При удалении пожелания произошла ошибка',
            axiosInstance.delete(`/wishlists/${wishId}`)
         )
         return dispatch(getWishesWithComplaints())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
