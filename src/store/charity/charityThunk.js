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
import { serializeObjectToQueryParams } from '../../utils/helpers/constants'

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
            'Ошибка при по лучении всех благотворительностей',
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
            'Ошибка при получении всех благотворительностей',
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
            'Ошибка при получени одной благотворительности',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const deleteCharityById = createAsyncThunk(
   '/charity/deleteCharityById',
   async ({ charityId, userId }, { rejectWithValue, dispatch }) => {
      try {
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Благотворительность успешно удалена.',
            'Ошибка при удалении благотворительности',
            axiosInstance.delete(`/charity?charityId=${charityId}`)
         )
         dispatch(getAllCharityByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const addCharity = createAsyncThunk(
   '/charity/addCharity',
   async ({ userId, charity, reset }, { rejectWithValue, dispatch }) => {
      try {
         const newCharity = {
            nameCharity: charity.holidayName,
            subcategory:
               subCategoriesWithRussianPropertiesName[charity.subCategory] ===
               'SMARTPHONES_AND_PHONES'
                  ? 'SMARTPHONE'
                  : subCategoriesWithRussianPropertiesName[charity.subCategory],
            category: categoriesWithRussianPropertiesName[charity.category],
            description: charity.description,
            image: charity.image,
            condition: conditionWithRussianPropertiesName[charity.state],
         }
         await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_WARNING,
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Успешно',
            'Благотворительность успешно добавлена.',
            'Ошибка при добавлении благотворительности',
            axiosInstance.post(`/charity`, newCharity)
         )
         reset()
         dispatch(getAllCharityByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const updateCharity = createAsyncThunk(
   '/charity/updateCharity',
   async (
      { userId, charityId, charity, reset },
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
            'Ошибка при обновлении благотворительности',
            axiosInstance.put(
               `/charity/update?charityId=${charityId}`,
               newCharity
            )
         )
         reset()
         dispatch(getAllCharityByUserId(userId))
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const blockOrUnblockCharityById = createAsyncThunk(
   '/charity/blockOrUnblockCharityById',
   async ({ charityId, blockCharity }, { rejectWithValue, dispatch }) => {
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
         dispatch(getAllCharity())
      } catch (error) {
         rejectWithValue(error)
      }
   }
)

export const searchCharity = createAsyncThunk(
   '/charity/searchCharity',
   async (
      { value, condition, category, subCategory, country },
      { rejectWithValue }
   ) => {
      try {
         const queryParams = serializeObjectToQueryParams({
            value,
            condition: condition === 'ALL' ? '' : condition,
            category,
            subCategory,
            country,
         })
         const response = await axiosInstance(
            `/charity/searchCharity?${queryParams}`
         )
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка при поиске благотворительностей',
            error
         )
         return rejectWithValue(error)
      }
   }
)

export const getAllReservedCharity = createAsyncThunk(
   'reservedCharity',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            '/booking/getAllReservedCharity'
         )
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка при получении всех забронированных благотворительностей!',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)
