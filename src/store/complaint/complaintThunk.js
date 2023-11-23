import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'
import { serializeObjectToQueryParams } from '../../utils/helpers/constants'

export const complaintWishThunk = createAsyncThunk(
   '/complaint/complaintWishThunk',
   async (payload, { rejectWithValue }) => {
      try {
         const { wishId, complaintType, complaintCause } = payload
         const queryParams = serializeObjectToQueryParams({
            wishId,
            status: complaintType,
            text: complaintCause,
         })
         const response = await axiosInstance.post(
            `/complaint/wish/${wishId}?${queryParams}`
         )
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            response.data?.message
         )
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка',
            error.data.message
         )
         return rejectWithValue(error)
      }
   }
)
