import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

const BASE_URL = 'http://giftlist.peaksoftprojects.com/api'

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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDE0MDg0MzcsImlhdCI6MTcwMTI3NjQzNywidXNlcm5hbWUiOiJhbGluYWFraG1hdG92YTc3QGdtYWlsLmNvbSJ9.JnftGt94whHYeXl_VsN5jziZ9FTIJ1ovRNhBcYVPBdQ'
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
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
