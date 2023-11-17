import { AccountCircle } from '@mui/icons-material'
import { AppBar, styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogoutIcon, ProfileIcon } from '../assets'
// import { logout } from '../store/auth/authSlice'
import { routes } from '../utils/constants'
import { Notification } from './Notification'
import { MeatBalls } from './UI/MeatBalls'
import { SearchSelect } from './UI/SearchSelect'
import { Modal } from './Modal'
import { Button } from './UI/Button'

const selectProperties = {
   state: '',
   category: '',
   subCategory: '',
   country: '',
   search: '',
}

export const Header = ({ variantOfSelect = '' }) => {
   const { reset, setValue } = useForm({
      defaultValues: selectProperties,
   })
   const { fullName } = useSelector((state) => state.authLogin)
   const [values, setValues] = useState(selectProperties)
   const { role } = useSelector((state) => state.authLogin)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isOpenModal, setIsOpenModal] = useState(false)
   const handleChange = (e) => {
      setValue(e.target.name, e.target.value)
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }
   const handleReset = () => {
      reset()
      setValues(selectProperties)
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
   console.log(dispatch)
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
                  <AccountCircle />
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
         <Modal handleClose={toggleModal} isOpen={isOpenModal}>
            <p>Вы уверены что хотите выйти?</p>
            <Actions>
               <LogoutIconContainer>
                  <LogoutIcon />
               </LogoutIconContainer>
               <Button>Отмена</Button>
               <Button variant="contained">Выйти</Button>
            </Actions>
         </Modal>
      </>
   )
}

const LogoutIconContainer = styled('div')({
   padding: '10px',
   width: '50px',
   height: '50px',
   borderRadius: '50px',
   backgroundColor: '#DFDFE6',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
})

const Actions = styled('div')({})

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
