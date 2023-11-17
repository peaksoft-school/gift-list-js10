import axios from 'axios'
import { store } from '../store'
import { logout } from '../store/auth/authSlice'

const BASE_URL =
   'http://ec2-54-93-243-138.eu-central-1.compute.amazonaws.com/api'

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
      return Promise.reject(error.response.data.message)
   }
)

let storeForInject

export const injectStore = (_store) => {
   storeForInject = _store
   return storeForInject
}
