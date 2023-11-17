import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfileThunk } from '../store/profile/profileThunk'
import { englishCountries, shoeSizeObject } from '../utils/constants/constants'
import { UpdateProfile } from './UpdateProfile'

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

/* 
PUT
{
  "firstName": "string",
  "lastName": "string",
  "country": "KYRGYZSTAN",
  "dateOfBirth": "2023-11-15",
  "phoneNumber": "string",
  "image": "string",
  "": "XXS",
  "shoeSize": "THIRTY_FIVE",
  "hobby": "string",
  "important": "string",
  "linkFacebook": "string",
  "vkontakte": "string",
  "instagram": "string",
  "telegram": "string"
}
GET
{
  "fullName": "NuraiymMamatova",
  "country": "AZERBAIJAN",
  "dateOfBirth": "2006-11-08",
  "email": "mnurajym9@gmail.com",
  "phoneNumber": "+996777112233",
  "image": "https://ca.slack-edge.com/T023L1WBFLH-U03M5BDM7N2-95125b9ffdbf-512",
  "clothingSize": "S",
  "shoeSize": "THIRTY_FIVE",
  "hobby": "Coding",
  "important": "Не курю",
  "linkFacebook": "Nuraiym Facebook",
  "vkontakte": "Nuraiym Vkontakte",
  "instagram": "Nuraiym Instagram",
  "telegram": "Nuraiym telegram"
}
*/
