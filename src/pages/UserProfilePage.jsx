import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileThunk } from '../store/profile/profileThunk'
import { Profile } from './LandingPage/Profile'
import { shoeSizeObject } from '../utils/constants/constants'

export const UserProfilePage = () => {
   const dispatch = useDispatch()
   const { profile } = useSelector((state) => state.profileSlice)

   useEffect(() => {
      dispatch(getProfileThunk())
   }, [])
   console.log(profile)
   console.log(Object.entries(profile).length)
   return (
      <div>
         <Profile
            variant="emptyProfile"
            birthdate={profile.dateOfBirth}
            clothSize={profile.clothingSize}
            email={profile.email}
            city={profile.country}
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
         />
      </div>
   )
}
