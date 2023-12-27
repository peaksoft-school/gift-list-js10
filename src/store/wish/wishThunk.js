import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'
import { getWishesWithComplaints } from '../complaints-slice/complaintsThunk'

export const getAllWishesByUserId = createAsyncThunk(
   'wish/getAllWishesByUserId',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/wishlists/user/${userId}`)
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

export const addWish = createAsyncThunk(
   '/wish/addWish',
   async ({ wishData, userId, holidayId, navigate }, { dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Sucess',
            'Успешно сохранено!',
            'Ошибка',
            axiosInstance.post(`/wishlists/${holidayId}`, wishData)
         )
         navigate(-1)
         dispatch(getAllWishesByUserId(userId))
      } catch (error) {
         dispatch(addWish.rejected(error))
      }
   }
)

export const deleteWish = createAsyncThunk(
   '',
   async ({ wishId, userId }, { dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Success',
            'Успешно удалено!',
            'Ошибка',
            axiosInstance.delete(`/wishlists/${wishId}`)
         )
         return dispatch(getAllWishesByUserId(userId))
      } catch (error) {
         return error
      }
   }
)

export const putWish = createAsyncThunk(
   'wish/putWish',
   async (
      { wishId, wishData, userId, navigate, holidayId },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Success',
            'Успешно обнавлено!',
            'Ошибка',
            axiosInstance.put(`/wishlists/${wishId}/${holidayId}`, wishData)
         )
         navigate(-1)
         dispatch(getAllWishesByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const getWishById = createAsyncThunk(
   '/wish/getWishById',
   async (wishId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/wishlists/${wishId}`)
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

export const getWishlistByWishId = createAsyncThunk(
   'wish/wishId',
   async (wishId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/complaint/getWishComplaintById/${wishId}`
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

export const isBlockWishById = createAsyncThunk(
   'wish/block',
   async ({ wishId, isBlock, variant }, { rejectWithValue, dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Пожелание успешно заблокирован!',
            'При заблокировании желания произошла ошибка',
            axiosInstance.put(
               `/wishlists/blockOrUnblock/${wishId}?block=${isBlock}`
            )
         )
         if (variant) {
            return dispatch(getWishesWithComplaints())
         }
         return dispatch(getWishlistByWishId(wishId))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const isUnBlockWishById = createAsyncThunk(
   'wish/unBlock',
   async ({ wishId, isBlock, variant }, { rejectWithValue, dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Информация',
            'Пожелание успешно разблокирован!',
            'При раблокировки желания произошла ошибка',
            axiosInstance.put(
               `/wishlists/blockOrUnblock/${wishId}?block=${isBlock}`
            )
         )
         if (variant) {
            return dispatch(getWishesWithComplaints())
         }
         return dispatch(getWishlistByWishId(wishId))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

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
