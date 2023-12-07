import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY, routes } from '../../utils/constants'

const initialState = {
   id: null,
   isAuth: null,
   email: null,
   token: null,
   role: null,
   fullName: null,
   image: '',
}

export const authSlice = createSlice({
   name: 'authLogin',
   initialState,
   reducers: {
      login: (state, { payload: { data, navigate } }) => {
         const newState = state
         newState.email = data.email
         newState.role = data.role
         newState.token = data.token
         newState.id = data.id
         newState.fullName = data.fullName
         newState.isAuth = true
         newState.image = data.image
         navigate(routes[data.role].path)
         return newState
      },
      logout: () => {
         const newState = initialState
         localStorage.removeItem(USER_KEY)
         return newState
      },
      forgotPassword: (state, { payload: { data } }) => {
         const newState = state
         newState.httpStatus = data.httpStatus
         newState.message = data.message
         return newState
      },
      changePassword: (state, { payload: { data } }) => {
         const newState = state
         newState.newPassword = data.newPassword
         newState.verifyPassword = data.verifyPassword
         return newState
      },
   },
})

export const { login, logout, register, forgotPassword, changePassword } =
   authSlice.actions
