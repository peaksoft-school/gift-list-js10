import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

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
   async ({ wishId, isBlock }, { rejectWithValue, dispatch }) => {
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
         return dispatch(getWishlistByWishId(wishId))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const isUnBlockWishById = createAsyncThunk(
   'wish/unBlock',
   async ({ wishId, isBlock }, { rejectWithValue, dispatch }) => {
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
         return dispatch(getWishlistByWishId(wishId))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
