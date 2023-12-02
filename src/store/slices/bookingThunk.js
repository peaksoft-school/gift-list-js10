import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'
import { getWishListByUserId } from './wishThunk'

export const bookingWishThunk = createAsyncThunk(
   '/booking/bookingWishThunk',
   async ({ wishId, isBookingAnonymous }, { rejectWithValue, dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Пожелание успешно забронировано',
            'При бронировании подарка произошла ошибка',
            axiosInstance.post(
               `/booking/bookingWish/${wishId}?reserveAnonymous=${isBookingAnonymous}`
            )
         )
         dispatch(getWishListByUserId())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const unBookingWishThunk = createAsyncThunk(
   '/booking/unbookingWishThunk',
   async (wishId, { rejectWithValue, dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Пожелание успешно разбронировано',
            'При разбронировании подарка произошла ошибка',
            axiosInstance.post(`/booking/unBookingWish/${wishId}`)
         )
         dispatch(getWishListByUserId())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
