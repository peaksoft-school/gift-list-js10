import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'

import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getAllWishes = createAsyncThunk(
   'wish/getAllWishes',
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
         dispatch(getAllWishes(userId))
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
         return dispatch(getAllWishes(userId))
      } catch (error) {
         return error
      }
   }
)

export const putWish = createAsyncThunk(
   'wish/putWish',
   async (
      { wishId, wishData, userId, navigate },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Success',
            'Успешно обнавлено!',
            'Ошибка',
            axiosInstance.put(`/wishlists/${wishId}`, wishData)
         )
         navigate(-1)
         dispatch(getAllWishes(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const getWishById = createAsyncThunk(
   'wish/getById',
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
