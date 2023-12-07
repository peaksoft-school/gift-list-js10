import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

export const BASE_URL = 'http://giftlist.peaksoftprojects.com/api'

const headers = {
   'Content-type': 'multipart/form-data',
}

export const axiosInstanceMultiPartFormData = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstanceMultiPartFormData.interceptors.request.use((config) => {
   const updateConfig = { ...config }
   // const { token } = store.getState().authLogin
   const token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDIxMTU2OTAsImlhdCI6MTcwMTk4MzY5MCwidXNlcm5hbWUiOiJtbnVyYWp5bTlAZ21haWwuY29tIn0.YSdIyzWK7ftLIpMSdusH4xjD6TiCbUAs9M8bUHbBT-8'
   if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`
   }
   return updateConfig
})

axiosInstanceMultiPartFormData.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response.status === 401) {
         store.dispatch(logout())
      }
      return Promise.reject(error)
   }
)
