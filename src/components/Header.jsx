import { AccountCircle } from '@mui/icons-material'
import { AppBar, styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { LogoutIcon, ProfileIcon } from '../assets'
import { logout } from '../store/auth/authSlice'
import { Notification } from './Notification'
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
   const { reset, setValue } = useForm({
      defaultValues: selectProperties,
   })
   // TODO:  here we should to get the current user's data
   const [values, setValues] = useState(selectProperties)
   const dispatch = useDispatch()
   const handleChange = (e) => {
      setValue(e.target.name, e.target.value)
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }
   const handleReset = () => {
      reset()
      setValues(selectProperties)
   }
   const meetballsChange = (e) => {
      const text = e.target.innerText
      if (text === 'Профиль') {
         // TODO: navigate to profile
      } else if (text === 'Выйти') {
         dispatch(logout())
      }
   }
   return (
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
               <StyledUserNameContainer>Naruto Uzumaki</StyledUserNameContainer>
               <MeatBalls
                  variant="profile"
                  handleChange={meetballsChange}
                  left="-20"
                  options={[
                     { title: 'Профиль', icon: <ProfileIcon /> },
                     { title: 'Выйти', icon: <LogoutIcon /> },
                  ]}
               />
            </DropdDownIconWrapper>
         </ProfileContainer>
      </StyledHeader>
   )
}

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
