import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProfileThunk } from '../store/profile/profileThunk'
import { englishCountries, shoeSizeObject } from '../utils/constants/constants'
import { Profile } from './LandingPage/Profile'
import { routes } from '../utils/constants'

export const UserProfilePage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { profile } = useSelector((state) => state.profileSlice)

   useEffect(() => {
      dispatch(getProfileThunk())
   }, [])

   const onEdit = () => {
      navigate(routes.USER.edit.path)
   }
   return (
      <div>
         <Profile
            variant={(profile.phoneNumber && 'myProfile') || 'emptyProfile'}
            birthdate={profile.dateOfBirth}
            clothSize={profile.clothingSize}
            email={profile.email}
            city={englishCountries[profile.country]}
            userName={profile.fullName}
            facebook={profile.linkFacebook}
            phoneNumber={profile.phoneNumber}
            importantToKnow={profile.important}
            shoesSize={shoeSizeObject[profile.shoeSize]}
            telegram={profile.telegram}
            vk={profile.vkontakte}
            interesAndHobbies={profile.hobby}
            userPicture={profile.image}
            instagram={profile.instagram}
            onClickFirstButton={onEdit}
         />
      </div>
   )
}
