import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getAllCharity = createAsyncThunk(
   '/charity/getAllCharities',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/charity/getAll')
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

export const getCharityById = createAsyncThunk(
   '/charity/getCharityById',
   async (charityId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/charity/get?charityId=${charityId}`
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

export const deleteCharityById = createAsyncThunk(
   '/charity/deleteCharityById',
   async ({ charityId, navigate }, { rejectWithValue }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Благотворительность успешно удалена.',
            'Ошибка',
            axiosInstance.delete(`/charity?charityId=${charityId}`)
         )
         navigate(-1)
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const addCharity = createAsyncThunk(
   '/charity/addCharity',
   async ({ charity, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const newCharity = {
            nameCharity: charity.holidayName,
            category: charity.category,
            subcategory: charity.subCategory,
            description: charity.description,
            image: 'string',
            condition: charity.state,
         }

         await axiosInstance('/charity/save', newCharity)
         navigate('charity')
         return dispatch(getAllCharity())
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
