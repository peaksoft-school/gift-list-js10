import axios from 'axios'
// eslint-disable-next-line import/no-cycle
import { store } from '../store/index'
import * as authSlice from '../store/slices/auth/authSlice'

const BASE_URL = 'http://giftlist-b10.peaksoftprojects.com/api'

const headers = {
   'Content-type': 'application/json',
}

export const changeHeadersContentTypeToMultiPartFormData = () => {
   headers['Content-type'] = 'multipart/form-data'
}

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use((config) => {
   const updateConfig = { ...config }
   // const { token } = store.getState().authLogin
   const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1udXJhanltOUBnbWFpbC5jb20iLCJpYXQiOjE2OTk2MjkwNjYsImV4cCI6MTY5OTc2MTA2Nn0.Jkgyqc2faXwwhCDpm9br7PCUI6URSF1ysgLFjE_L7PM'
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
         store.dispatch(authSlice.logout())
      }
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
