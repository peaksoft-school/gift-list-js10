import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateProfile } from '../../layout/UpdateProfile'
import { updateProfileThunk } from '../../store/profile/profileThunk'
import {
   englishCountries,
   shoeSizeObject,
} from '../../utils/constants/constants'

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
   } = useSelector((state) => state.profile.profile)
   const dispatch = useDispatch()

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
      dispatch(updateProfileThunk({ values }))
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
