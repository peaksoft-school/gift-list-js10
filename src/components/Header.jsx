import { AppBar, Avatar, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LogoutIcon, ProfileIcon } from '../assets'
import { logout } from '../store/auth/authSlice'
import { routes } from '../utils/constants'
import { Notification } from './Notification'
import { MeatBalls } from './UI/MeatBalls'
import { SearchSelect } from './UI/SearchSelect'
import { Modal } from './Modal'
import { Button } from './UI/Button'
import { getUsersSearch } from '../store/feed/feedThunk'

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
   const { role, image } = useSelector((state) => state.authLogin)
   const { searchUsers } = useSelector((state) => state.feedSlice)
   const { pathname } = useLocation()

   const { fullName } = useSelector((state) => state.authLogin)
   const [values, setValues] = useState(selectProperties)
   const [search, setSearch] = useState(null)
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isOpenModal, setIsOpenModal] = useState(false)

   const handleChange = (e) => {
      setValue(e.target.name, e.target.value)
      setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
   }

   const handleSearch = (e) => {
      setSearch(e.target.value)
   }
   useEffect(() => {
      if (pathname === '/user/feed') {
         console.log(search)
         console.log(searchUsers)
         dispatch(getUsersSearch(search))
      }
   }, [search])

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
   const onLogout = () => dispatch(logout())
   return (
      <>
         <StyledHeader>
            <SearchSelect
               values={values}
               handleChange={handleChange}
               handleSearch={handleSearch}
               handleReset={handleReset}
               variant={variantOfSelect}
               search={search}
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
         {searchUsers?.length > 0 && search && (
            <Styledsearch>
               <Container>
                  <h3>Результаты поиска</h3>
                  {searchUsers?.map((user) => (
                     <SearchContainer key={user.userId}>
                        <p>{user.fullName}</p>
                        <img src={user.image} alt={user.fullName} />
                     </SearchContainer>
                  ))}
               </Container>
            </Styledsearch>
         )}

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

const Styledsearch = styled('div')({
   width: '100%',
   position: 'relative',
   top: '0',
   left: '0',
   background: 'white',
})

const SearchContainer = styled('div')({})
const Container = styled('div')({
   width: '100%',
   position: 'absolute',
   top: '-30px',
   left: '30px',
   background: 'white',
   zIndex: '3',
})

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
