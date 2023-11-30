import { createAsyncThunk } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { axiosInstance } from '../../config/axiosInstance'
import { auth } from '../../config/firebase'
import { USER_KEY } from '../../utils/constants'
import { notifyTypes, toastWithPromise } from '../../utils/helpers/toast'
import { forgotPassword, login, register } from './authSlice'

export const loginQuery = createAsyncThunk(
   'authorization/login',
   async (
      { userData, navigate, login, isRememberMeChecked },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы вошли в аккаунт',
            'Ошибка',
            axiosInstance.post('/api/auth/signIn', userData)
         )

         if (isRememberMeChecked) {
            localStorage.setItem(USER_KEY, JSON.stringify(response))
         } else {
            sessionStorage.setItem(USER_KEY, JSON.stringify(response))
         }
         return dispatch(login({ data: response.data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const registerQuery = createAsyncThunk(
   'authorization/registration',
   async ({ userData, isAgree, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы зарегистрированы',
            'Ошибка',
            axiosInstance.post('/api/auth/signUp', { ...userData, isAgree })
         )
         localStorage.setItem(USER_KEY, JSON.stringify(response))
         return dispatch(register({ data: response.data, navigate }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const forgotPasswordQuery = createAsyncThunk(
   'authorization/forgot-password',
   async (userData, { rejectWithValue, dispatch }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы зарегистрированы',
            'Ошибка',
            axiosInstance.post(`/auth/forgotPassword?email=${userData}`)
         )
         localStorage.setItem(USER_KEY, JSON.stringify(response))
         return dispatch(forgotPassword({ data: response.data }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const changePasswordQuery = createAsyncThunk(
   'authorization/change-password',
   async (userData, { rejectWithValue }) => {
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Пароль успешно изменен',
            'Ошибка',
            axiosInstance.post('api/auth/changePassword', userData)
         )
         // localStorage.setItem(USER_KEY, JSON.stringify(response))
         console.log(response)
         return null
         // return dispatch(changePassword({ data: response.data }))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const authWithGoogle = createAsyncThunk(
   'sign-in-with-google',
   async (navigate, { rejectWithValue, dispatch }) => {
      const provider = new GoogleAuthProvider()
      try {
         const response = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы авторизовались',
            'Ошибка',
            signInWithPopup(auth, provider)
         )
         const secondResponse = await toastWithPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            notifyTypes.NOTIFY_TYPE_SUCCESS_SUCCESS,
            'Информация',
            'Вы авторизовались',
            'Ошибка',
            axiosInstance.post(
               `/auth/auth-google?tokenId=${response.user.accessToken}`
            )
         )
         return dispatch(
            login({
               data: secondResponse.data,
               navigate,
            })
         )
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
