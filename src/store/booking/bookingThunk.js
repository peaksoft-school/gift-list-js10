import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'

export const bookingCharityThunk = createAsyncThunk(
   '/booking/bookingCharityThunk',
   async (
      { charityId, isBookingAnonymous, userId, getSomethingsByUserId },
      { rejectWithValue, dispatch }
   ) => {
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
         dispatch(getSomethingsByUserId(userId))
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const unbookingCharityThunk = createAsyncThunk(
   '/charity/unbookingCharityThunk',
   async (
      { charityId, userId, getSomethingsByUserId },
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
         return dispatch(getSomethingsByUserId(userId))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
