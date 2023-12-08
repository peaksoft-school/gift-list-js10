import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'
import { BASE_URL } from './axiosInstanceWithMultipartFormDataType'

const headers = {
   'Content-type': 'application/json',
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updateConfig = { ...config }
   // const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDIxMTU2OTAsImlhdCI6MTcwMTk4MzY5MCwidXNlcm5hbWUiOiJtbnVyYWp5bTlAZ21haWwuY29tIn0.YSdIyzWK7ftLIpMSdusH4xjD6TiCbUAs9M8bUHbBT-8'
   if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`
   }
   return updateConfig
})

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(logout())
      }
      return Promise.reject(error.response.data.message || error.message)
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
