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

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
