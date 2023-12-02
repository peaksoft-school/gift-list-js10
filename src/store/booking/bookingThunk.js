import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'
import { getFeedsThunk } from '../feed/feedThunk'

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
         dispatch(getFeedsThunk())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const bookingCharityThunk = createAsyncThunk(
   '/booking/bookingCharityThunk',
   async ({ charityId, isBookingAnonymous }, { rejectWithValue, dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Благотворительность успешно забронирована',
            'При бронировании подарка произошла ошибка',
            axiosInstance.post(
               `/booking/${charityId}?reserveAnonymous=${isBookingAnonymous}`
            )
         )
         dispatch(getFeedsThunk())
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
         dispatch(getFeedsThunk())
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const unbookingCharityThunk = createAsyncThunk(
   '/charity/unbookingCharityThunk',
   async ({ charityId, userId }, { rejectWithValue, dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Успешно',
            'Благотворительность разбронирована',
            'Ошибка',
            axiosInstance.post(`/booking/unBookingCharity/${charityId}`)
         )
         return dispatch(getFeedsThunk(userId))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
