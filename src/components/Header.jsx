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
import {
   getSearchHolidays,
   getSearchWish,
   getUsersSearch,
} from '../store/search/searchThunk'
import { getProfileByUserId } from '../store/profile/profileThunk'
import { providerEvent } from '../events/customEvents'

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
   const searchUsers = useSelector((state) => state.search.searchResult)
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
      if (pathname.includes('feed')) {
         dispatch(getUsersSearch(search))
      } else if (pathname.includes('wish')) {
         dispatch(getSearchWish(search))
      } else if (pathname.includes('my-holidays')) {
         dispatch(getSearchHolidays(search))
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

   const openUserProfile = (userId, name) => {
      dispatch(getProfileByUserId(userId))
      providerEvent({ action: 'name', payload: name })
      navigate(`addToMyFriends/${userId}`)
      setSearch('')
   }

   const openWishPage = (thingId, name) => {
      providerEvent({ action: 'name', payload: name })
      navigate(`feed/${thingId}/WISH`)
   }

   const openHolidayPage = (thingId, name) => {
      providerEvent({ action: 'name', payload: name })
      navigate(`feed/${thingId}/HOLIDAY`)
   }

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
         {searchUsers.result?.length > 0 && search && (
            <Styledsearch>
               <Container>
                  <h3>Результаты поиска</h3>
                  {(() => {
                     switch (searchUsers.type) {
                        case 'USER':
                           return searchUsers?.result.map((user) => (
                              <SearchContainer
                                 key={user.userId}
                                 onClick={() =>
                                    openUserProfile(user.userId, user.fullName)
                                 }
                              >
                                 <img src={user.image} alt={user.fullName} />
                                 <p>{user.fullName}</p>
                              </SearchContainer>
                           ))
                        case 'WISH':
                           return searchUsers?.result.map((wish) => (
                              <SearchContainer
                                 key={wish.wishId}
                                 onClick={() =>
                                    openWishPage(wish.wishId, wish.wishName)
                                 }
                              >
                                 <img
                                    src={wish.wishImage}
                                    alt={wish.wishName}
                                 />
                                 <p>{wish.wishName}</p>
                              </SearchContainer>
                           ))
                        case 'HOLIDAY':
                           return searchUsers?.result.map((holiday) => (
                              <SearchContainer
                                 key={holiday.holidayId}
                                 onClick={() =>
                                    openHolidayPage(
                                       holiday.holidayId,
                                       holiday.nameHoliday
                                    )
                                 }
                              >
                                 <img
                                    src={holiday.image}
                                    alt={holiday.nameHoliday}
                                 />
                                 <p>{holiday.nameHoliday}</p>
                              </SearchContainer>
                           ))

                        default:
                           return null
                     }
                  })()}
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
   width: '73%',
   background: 'white',
   position: 'relative',
   top: '-50px',
   left: '20px',
})

const SearchContainer = styled('div')({
   width: '100%',
   padding: '10px',
   display: 'flex',
   gap: '20px',
   alignItems: 'center',
   '&>img': {
      width: '40px',
      height: '40px',
      borderRadius: '50px',
   },
})
const Container = styled('div')({
   width: '100%',
   position: 'absolute',
   background: 'white',
   padding: '30px',
   borderRadius: '5px',
   top: '0',
   left: '0',
   zIndex: '3',
   '& > h3': {
      padding: '5px',
      borderBottom: '1px solid #918e8e',
   },
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
