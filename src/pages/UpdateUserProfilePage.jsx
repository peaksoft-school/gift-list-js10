import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfileThunk } from '../store/profile/profileThunk'
import { englishCountries, shoeSizeObject } from '../utils/constants/constants'
import { UpdateProfile } from '../layout/UpdateProfile'

export const UpdateUserProfilePage = () => {
   const {
      fullName,
      country,
      dateOfBirth,
      phoneNumber,
      image,
      clothingSize,
      shoeSize,
      hobby,
      important,
      linkFacebook,
      vkontakte,
      instagram,
      telegram,
      email,
   } = useSelector((state) => state.profileSlice.profile)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const firstName = fullName?.match(/[A-Z][a-z]*/)[0]
   const lastName = fullName?.replace(firstName, '')

   const defaultValues = {
      name: firstName,
      surname: lastName,
      email,
      country: englishCountries[country],
      dateOfBirth,
      phoneNumber,
      image,
      clothingSize,
      shoeSize: shoeSizeObject[shoeSize],
      hobbies: hobby,
      importantToKnow: important,
      facebookLink: linkFacebook,
      vkLink: vkontakte,
      instagramLink: instagram,
      telegramLink: telegram,
   }

   const onSubmit = (values) => {
      dispatch(updateProfileThunk({ values, navigate }))
   }

   return (
      <div>
         <UpdateProfile
            defaultValues={defaultValues}
            functionForGetValues={onSubmit}
         />
      </div>
   )
}
