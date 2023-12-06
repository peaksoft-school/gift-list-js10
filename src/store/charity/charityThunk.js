import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'
import {
   categoriesWithRussianPropertiesName,
   conditionWithRussianPropertiesName,
   subCategoriesWithRussianPropertiesName,
} from '../../utils/constants/constants'

export const getAllCharityByUserId = createAsyncThunk(
   '/charity/getAllCharityByUserId',
   async (userId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/charity/myCharities?userId=${userId}`
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

export const getAllCharity = createAsyncThunk(
   '/charity/getAllCharity',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/charity`)
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
         const response = await axiosInstance.get(`/charity/${charityId}`)
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
   async ({ userId, charity, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const newCharity = {
            nameCharity: charity.holidayName,
            category: categoriesWithRussianPropertiesName[charity.category],
            subcategory:
               subCategoriesWithRussianPropertiesName[charity.subCategory],
            description: charity.description,
            image: charity.image,
            condition: conditionWithRussianPropertiesName[charity.state],
         }

         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Благотворительность успешно добавлена.',
            'Ошибка',
            axiosInstance.post(`/charity`, newCharity)
         )
         navigate(-1)
         dispatch(getAllCharityByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const updateCharity = createAsyncThunk(
   '/charity/addCharity',
   async (
      { userId, charityId, charity, navigate },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const newCharity = {
            nameCharity: charity.holidayName,
            category: categoriesWithRussianPropertiesName[charity.category],
            subcategory:
               subCategoriesWithRussianPropertiesName[charity.subCategory],
            description: charity.description,
            image: charity.image,
            condition: conditionWithRussianPropertiesName[charity.state],
         }
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Благотворительность обновлена.',
            'Ошибка',
            axiosInstance.put(
               `/charity/update?charityId=${charityId}`,
               newCharity
            )
         )
         navigate(-1)
         dispatch(getAllCharityByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const blockOrUnblockCharityById = createAsyncThunk(
   '/charity/blockOrUnblockCharityById',
   async ({ charityId, blockCharity }, { rejectWithValue }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            blockCharity
               ? 'Благотворительность успешно заблокирована'
               : 'Благотворительность успешно разблокирована',
            'Ошибка',
            axiosInstance.put(
               `/charity/${charityId}?blockCharity=${blockCharity}`
            )
         )
      } catch (error) {
         rejectWithValue(error)
      }
   }
)
