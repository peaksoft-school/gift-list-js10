import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY, routes } from '../../utils/constants'

const initialState = {
   id: null,
   isAuth: null,
   email: null,
   token: null,
   role: null,
   fullName: null,
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
         navigate(routes[data.role].path)
         return newState
      },
      logout: () => {
         const newState = initialState
         localStorage.removeItem(USER_KEY)
         return newState
      },
   },
})

export const { login, logout } = authSlice.actions
