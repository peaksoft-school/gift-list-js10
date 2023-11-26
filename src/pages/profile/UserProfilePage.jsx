import { styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ChangePasswordXIcon } from '../../assets'
import { Modal } from '../../components/Modal'
import { getProfileThunk } from '../../store/profile/profileThunk'
import { routes } from '../../utils/constants'
import { Profile } from '../LandingPage/Profile'
import {
   englishCountries,
   shoeSizeObject,
} from '../../utils/constants/constants'
import { LoadingPage } from '../../components/LoadingPage'

export const UserProfilePage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { profile, error, pending } = useSelector(
      (state) => state.profileSlice
   )
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
            birthdate={profile.dateOfBirth}
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
            userPicture={profile.image}
            instagram={profile.instagram}
            onClickFirstButton={onEditProfile}
            onClickSecondButton={toggleEditPasswordModalOpen}
         />
         <Modal
            handleClose={toggleEditPasswordModalOpen}
            isOpen={isEditPasswordModalOpen}
            padding="20px"
         >
            <form>
               <legend>
                  Смена пароля
                  <StyledChangePasswordXIcon
                     onClick={toggleEditPasswordModalOpen}
                  />
                  {/* TODO: Kasym baikenikin jazyp koiom */}
               </legend>
            </form>
         </Modal>
      </div>
   )
}

const StyledChangePasswordXIcon = styled(ChangePasswordXIcon)({
   cursor: 'pointer',
})
