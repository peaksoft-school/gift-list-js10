import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { axiosInstance } from '../../config/axiosInstance'

export const getProfileThunk = createAsyncThunk(
   'profile/getProfileThunk',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/profile')
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const updateProfileThunk = createAsyncThunk(
   'profile/updateProfileThunk',
   async (values, { rejectWithValue }) => {
      try {
         const {
            clothingSelectedSize,
            country,
            dateofbirth: dateOfBirth,
            facebookLink,
            hobbies,
            importantToKnow,
            instagramLink,
            name,
            phoneNumber,
            previewImg,
            shoeSelectedSize,
            surname,
            telegramLink,
            vkLink,
         } = values

         const response = await axiosInstance.put('/profile', {
            firstName: name,
            lastName: surname,
            country,
            dateOfBirth,
            phoneNumber,
            image: previewImg.url,
            clothingSize: clothingSelectedSize,
            shoeSize: shoeSelectedSize,
            hobby: hobbies,
            important: importantToKnow,
            linkFacebook: facebookLink,
            vkontakte: vkLink,
            instagram: instagramLink,
            telegram: telegramLink,
         })
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
