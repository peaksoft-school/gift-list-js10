import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'
import { getFeedsThunk } from '../feed/feedThunk'

export const bookingWishThunk = createAsyncThunk(
   '/booking/bookingWishThunk',
   async ({ bookerId, isBookingAnonymous }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post(
            `/booking/bookingWish/${bookerId}?reserveAnonymous=${isBookingAnonymous}`
         )
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Бронирование подарка',
            response.data.message
         )
         dispatch(getFeedsThunk())
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'При бронировании подарка произошла ошибка',
            error.data.message
         )
         return rejectWithValue(error)
      }
   }
)

export const unBookingWishThunk = createAsyncThunk(
   '/booking/unbookingWishThunk',
   async (wishId, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post(
            `/booking/unBookingWish/${wishId}`
         )
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Разбронирование подарка',
            response.data.message
         )
         dispatch(getFeedsThunk())
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка',
            error.message || error
         )
         return rejectWithValue(error)
      }
   }
)
