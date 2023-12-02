import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import {
   notifyTypes,
   toastWithPromise,
   toastWithoutPromise,
} from '../../utils/helpers/toast'

export const getFriends = createAsyncThunk(
   'user/friends',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/myFriends')
         const result = response.data
         console.log(result)
         return result
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

export const deleteFriendById = createAsyncThunk(
   '/myFriends',
   async (friendId, { dispatch }) => {
      try {
         const response = await axiosInstance.delete(`/myFriends/${friendId}`)
         const result = response.data
         console.log(result)
         dispatch(getFriends())
         return result
      } catch (error) {
         console.log(error)
         return error
      }
   }
)

export const sendRequestToUser = createAsyncThunk(
   '/myFriends/{friendId}',
   async (friendId, { dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'Ваш запрос успешно отправлен',
            axiosInstance.post(`/myFriends/${friendId}`)
         )
         dispatch(getFriends())
         const result = response.data
         console.log(result)
         return result
      } catch (error) {
         console.log(error)
         return error
      }
   }
)

export const acceptRequest = createAsyncThunk(
   '/myFriends/acceptFriend',
   async (friendId, { dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_SUCCESS_INFO,
            'helloooooo',
            axiosInstance.post(`/myFriends/acceptFriend${friendId}`)
         )
         console.log(response.data)
         dispatch(getFriends())
         return response.data
      } catch (error) {
         console.log(error)
         return error
      }
   }
)
