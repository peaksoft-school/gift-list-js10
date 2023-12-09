import { AppBar, Avatar, styled } from '@mui/material'
import { React, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDebounce } from 'use-debounce'
import { LogoutIcon, ProfileIcon } from '../assets'
import { logout } from '../store/auth/authSlice'
import { searchCharity } from '../store/charity/charityThunk'
import { routes } from '../utils/constants'
import {
   categoriesWithRussianPropertiesName,
   conditionWithRussianPropertiesName,
   russianCountries,
   subCategoriesWithRussianPropertiesName,
} from '../utils/constants/constants'
import { Modal } from './Modal'
import { Notification } from './Notification'
import { Button } from './UI/Button'
import { MeatBalls } from './UI/MeatBalls'
import { SearchSelect } from './UI/SearchSelect'

const selectProperties = {
   state: '',
   category: '',
   subCategory: '',
   country: '',
   search: '',
}

export const Header = ({ variantOfSelect = '' }) => {
   const [searchParams, setSearchParams] = useSearchParams()
   let defaultSelectProperites = selectProperties
   if (variantOfSelect === 'select') {
      defaultSelectProperites = {
         state: searchParams.get('state') || '',
         category: searchParams.get('category') || '',
         subCategory: searchParams.get('subCategory') || '',
         country: searchParams.get('country') || '',
         search: searchParams.get('search') || '',
      }
   }
   const { reset, setValue } = useForm({
      defaultValues: defaultSelectProperites,
   })
   const { fullName } = useSelector((state) => state.authLogin)
   const [values, setValues] = useState(defaultSelectProperites)
   const { role, image } = useSelector((state) => state.authLogin)
   const [searchTerm, setSearchTerm] = useState('')
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isOpenModal, setIsOpenModal] = useState(false)
   const [debouncedValue] = useDebounce(searchTerm, 1000)
   useEffect(() => {
      dispatch(
         searchCharity({
            value: debouncedValue,
            condition: conditionWithRussianPropertiesName[values.state],
            category: categoriesWithRussianPropertiesName[values.category],
            subCategory:
               subCategoriesWithRussianPropertiesName[values.subCategory],
            country: russianCountries[values.country],
         })
      )
   }, [
      debouncedValue,
      values.category,
      values.country,
      values.state,
      values.subCategory,
   ])
   const handleChange = (e) => {
      if (e.target.name === 'search') setSearchTerm(e.target.value)
      searchParams.set(e.target.name, e.target.value)
      setSearchParams(searchParams)
      setValue(e.target.name, e.target.value)
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }
   const handleReset = () => {
      setSearchParams({})
      reset()
      setValues(defaultSelectProperites)
   }
   const toggleModal = () => setIsOpenModal((prev) => !prev)
   const meetballsChange = (e) => {
      const text = e.target.innerText
      if (text === 'Профиль') {
         navigate(routes.USER.profile.path)
      } else if (text === 'Выйти') {
         toggleModal()
      }
   }
   const onLogout = () => dispatch(logout())
   return (
      <>
         <StyledHeader>
            <SearchSelect
               values={values}
               handleChange={handleChange}
               handleReset={handleReset}
               variant={variantOfSelect}
            />
            <ProfileContainer>
               <NotificationWrapper>
                  <Notification />
               </NotificationWrapper>
               <DropdDownIconWrapper>
                  <StyledAvatarIcon alt={fullName} src={image} />
                  <StyledUserNameContainer>{fullName}</StyledUserNameContainer>
                  <MeatBalls
                     variant="profile"
                     handleChange={meetballsChange}
                     left="-20"
                     options={
                        role === 'USER'
                           ? [
                                { title: 'Профиль', icon: <ProfileIcon /> },
                                { title: 'Выйти', icon: <LogoutIcon /> },
                             ]
                           : [{ title: 'Выйти', icon: <LogoutIcon /> }]
                     }
                  />
               </DropdDownIconWrapper>
            </ProfileContainer>
         </StyledHeader>
         <Modal handleClose={toggleModal} isOpen={isOpenModal} padding="20px">
            <ModalContent>
               <LogoutIconContainer>
                  <LogoutIcon />
               </LogoutIconContainer>
               <p>Вы уверены что хотите выйти?</p>
               <Actions>
                  <StyledButton onClick={toggleModal}>Отмена</StyledButton>
                  <StyledButton onClick={onLogout} variant="contained">
                     Выйти
                  </StyledButton>
               </Actions>
            </ModalContent>
         </Modal>
      </>
   )
}

const StyledAvatarIcon = styled(Avatar)((props) => {
   return {
      width: '1.25rem',
      height: '1.25rem',
      padding: props?.children && '13px',
   }
})

const ModalContent = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '20px',
   width: '30rem',
   fontSize: '1.5rem',
   fontWeight: '500',
})

const StyledButton = styled(Button)({
   height: '2rem',
   fontWeight: '400',
   width: '48%',
})

const LogoutIconContainer = styled('div')({
   padding: '10px',
   width: '5rem',
   height: '5rem',
   borderRadius: '5rem',
   backgroundColor: '#DFDFE6',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   svg: {
      width: '3rem',
      height: '3rem',
   },
})

const Actions = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   width: '100%',
})

const StyledUserNameContainer = styled('p')({
   width: 'max-content',
})

const DropdDownIconWrapper = styled('div')({
   display: 'flex',
   gap: '5px',
   alignItems: 'center',
})

const NotificationWrapper = styled('div')({
   div: {
      alignItems: 'center',
   },
   svg: {
      cursor: 'pointer',
   },
   '.css-1acg54y': {
      cursor: 'pointer',
   },
})

const ProfileContainer = styled('div')({
   display: 'flex',
   alignItems: 'center',
})

const StyledHeader = styled(AppBar)({
   position: 'static',
   backgroundColor: '#fff',
   flexDirection: 'row',
   color: 'black',
   alignItems: 'center',
   WebkitBoxShadow: '4px 4px 100px 0px rgba(34, 60, 80, 0.28)',
   boxShadow: '4px 4px 100px 0px rgba(34, 60, 80, 0.28)',
})
