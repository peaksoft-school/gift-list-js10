import { createSlice } from '@reduxjs/toolkit'
import { USER_KEY, routes } from '../../utils/constants'

const initialState = {
   id: 5,
   isAuth: null,
   email: null,
   token: null,
   role: null,
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
