import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getSearchWish = createAsyncThunk(
   'searchWish',
   async (searchValue, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/wishlists/searchWishByName?wishName=${searchValue}`
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

export const getSearchHolidays = createAsyncThunk(
   'searcHolidays',
   async (searchValue, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/holidays/searchHolidayByName?holidayName=${searchValue}`
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

export const getUsersSearch = createAsyncThunk(
   'searchUser',
   async (searchValue, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/user/searchUser?userName=${searchValue}`
         )
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
