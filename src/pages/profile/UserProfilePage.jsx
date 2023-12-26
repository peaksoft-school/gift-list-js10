import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ChangePassword } from '../../components/ChangePassword'
import { LoadingPage } from '../../components/loading/LoadingPage'
import { getProfileThunk } from '../../store/profile/profileThunk'
import { routes } from '../../utils/constants'
import {
   englishCountries,
   shoeSizeObject,
} from '../../utils/constants/constants'
import { convertDateFormat } from '../../utils/helpers/constants'
import { Profile } from '../LandingPage/Profile'

export const UserProfilePage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const { profile, error, pending } = useSelector((state) => state.profile)
   const [isEditPasswordModalOpen, setIsEditPasswordModalOpen] = useState(false)

   useEffect(() => {
      dispatch(getProfileThunk())
   }, [])

   const onEditProfile = () => {
      navigate(routes.USER.edit.path)
   }

   const toggleEditPasswordModalOpen = () =>
      setIsEditPasswordModalOpen((prev) => !prev)
   const firstName = profile.fullName?.match(/[A-Z][a-z]*/)[0]
   const lastName = profile.fullName?.replace(firstName, '')
   if (error) {
      if (error.includes('403')) {
         return 'Ошибка 403. Доступ запрещен.'
      }
      return error
   }
   if (pending) {
      return <LoadingPage />
   }
   return (
      <div>
         <Profile
            variant={(profile.phoneNumber && 'myProfile') || 'emptyProfile'}
            birthdate={
               profile.dateOfBirth && convertDateFormat(profile.dateOfBirth)
            }
            clothSize={profile.clothingSize}
            email={profile.email}
            city={englishCountries[profile.country]}
            userName={`${firstName} ${lastName}`}
            facebook={profile.linkFacebook}
            phoneNumber={profile.phoneNumber}
            importantToKnow={profile.important}
            shoesSize={shoeSizeObject[profile.shoeSize]}
            telegram={profile.telegram}
            vk={profile.vkontakte}
            interesAndHobbies={profile.hobby}
            image={profile.image}
            instagram={profile.instagram}
            onClickFirstButton={onEditProfile}
            onClickSecondButton={toggleEditPasswordModalOpen}
         />
         {isEditPasswordModalOpen && (
            <ChangePassword variant handleClose={toggleEditPasswordModalOpen} />
         )}
      </div>
   )
}
