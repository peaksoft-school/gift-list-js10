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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDE2MjgwNjEsImlhdCI6MTcwMTQ5NjA2MSwidXNlcm5hbWUiOiJtbnVyYWp5bTlAZ21haWwuY29tIn0.8yiBGnm4g36Dm_fDkZ349P9J5NqiznG_iEGAej4QfUM'
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
