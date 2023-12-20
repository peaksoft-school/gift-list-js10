import { createAsyncThunk } from '@reduxjs/toolkit'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'
import { axiosInstance } from '../../config/axiosInstance'

export const bookingWishThunk = createAsyncThunk(
   '/booking/bookingWishThunk',
   async (
      { wishId, isBookingAnonymous, userId, getSomethingFunction },
      { rejectWithValue, dispatch }
   ) => {
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
         dispatch(getSomethingFunction(userId))
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const unBookingWishThunk = createAsyncThunk(
   '/booking/unbookingWishThunk',
   async (
      { wishId, userId, getSomethingFunction },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Пожелание успешно разбронировано',
            'При разбронировании подарка произошла ошибка',
            axiosInstance.post(`/booking/unBookingWish/${wishId}`)
         )
         dispatch(getSomethingFunction(userId))
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const bookingCharityThunk = createAsyncThunk(
   '/booking/bookingCharityThunk',
   async (
      { charityId, isBookingAnonymous, userId, getSomethingFunction },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Благотворительность успешно забронирована',
            'При бронировании благотворительности произошла ошибка',
            axiosInstance.post(
               `/booking/${charityId}?reserveAnonymous=${isBookingAnonymous}`
            )
         )
         dispatch(getSomethingFunction(userId))
         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const unbookingCharityThunk = createAsyncThunk(
   '/charity/unbookingCharityThunk',
   async (
      { charityId, userId, getSomethingFunction },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Успешно',
            'Благотворительность разбронирована',
            'Ошибка',
            axiosInstance.post(`/booking/unBookingCharity/${charityId}`)
         )
         return dispatch(getSomethingFunction(userId))
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
