import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../config/axiosInstance'
import { russianCountries, shoeSizeEnum } from '../../utils/constants/constants'
import { formatDate } from '../../utils/helpers/constants'
import { notifyTypes, toastWithoutPromise } from '../../utils/helpers/toast'

export const getProfileThunk = createAsyncThunk(
   'profile/getProfileThunk',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/profile')
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)

export const updateProfileThunk = createAsyncThunk(
   'profile/updateProfileThunk',
   async ({ values, navigate }, { rejectWithValue }) => {
      try {
         const {
            clothingSize,
            country,
            dateofbirth,
            facebookLink,
            hobbies,
            importantToKnow,
            instagramLink,
            name,
            phoneNumber,
            image,
            shoeSize,
            surname,
            telegramLink,
            vkLink,
         } = values

         const updatedProfile = {
            firstName: name,
            lastName: surname,
            phoneNumber,
         }

         if (country) updatedProfile.country = russianCountries[country]
         if (dateofbirth) updatedProfile.dateOfBirth = formatDate(dateofbirth)
         if (image) updatedProfile.image = image
         if (clothingSize) updatedProfile.clothingSize = clothingSize
         if (shoeSize) updatedProfile.shoeSize = shoeSizeEnum[shoeSize]
         if (hobbies) updatedProfile.hobby = hobbies
         if (importantToKnow) updatedProfile.important = importantToKnow
         if (facebookLink) updatedProfile.linkFacebook = facebookLink
         if (vkLink) updatedProfile.vkontakte = vkLink
         if (instagramLink) updatedProfile.instagram = instagramLink
         if (telegramLink) updatedProfile.telegram = telegramLink

         const response = await axiosInstance.put('/profile', updatedProfile)
         navigate(-1)
         return response.data
      } catch (error) {
         toastWithoutPromise(
            notifyTypes.NOTIFY_TYPE_ERROR_ERROR,
            'Ошибка',
            error.message
         )
         return rejectWithValue(error)
      }
   }
)
