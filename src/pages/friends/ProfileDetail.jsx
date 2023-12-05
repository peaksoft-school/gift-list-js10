import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import {
   acceptRequest,
   deleteFriendById,
} from '../../store/slices/my-friends/friendsThunk'
import { meetballsFriendOptions } from '../../utils/constants/meetballs-options'
import { Profile } from '../LandingPage/Profile'
import { getProfileByUserId } from '../../store/slices/profile-slice/profileByIdThunk'
import { getWishListByUserId } from '../../store/slices/wishes/wishThunk'
import { getHolidaysByUserId } from '../../store/slices/holidays/holidayThunk'
import { getCharitiesByUserId } from '../../store/slices/charities/chaririesThunk'

const isWishBooked = (bookerId, myId) => {
   if (bookerId === myId) {
      return meetballsFriendOptions.unBooking
   }
   return meetballsFriendOptions.booking
}

export const ProfileDetail = ({ variant }) => {
   const dispatch = useDispatch()
   const { friendId } = useParams()

   const profile = useSelector((state) => state.profile.friendId)
   const { id } = useSelector((state) => state.authLogin)

   const friendWishes = useSelector((state) => state.friendWishes.wishes)
   const newFriendWishes = friendWishes.slice(0, 3)

   const friendHolidays = useSelector((state) => state.holidays.holidays)
   const newFriendHolidays = friendHolidays.slice(0, 3)

   const friendsCharities = useSelector((state) => state.charities.charities)
   const newFriendsCharities = friendsCharities.slice(0, 3)

   useEffect(() => {
      dispatch(getProfileByUserId(friendId))
      dispatch(getWishListByUserId(friendId))
      dispatch(getHolidaysByUserId(friendId))
      dispatch(getCharitiesByUserId(friendId))
   }, [dispatch])

   const handleDeleteFriendById = (userId) => {
      dispatch(deleteFriendById(userId))
   }

   const handleAceptRequestFriendById = (userId) => {
      dispatch(acceptRequest(userId))
   }

   return (
      <Container>
         {variant === 'myFriendProfile' && (
            <Profile
               variant="removeFromFriends"
               key={profile.userId}
               image={profile.image}
               fullName={profile.fullName}
               city={profile.country}
               email={profile.email}
               birthdate={profile.dateOfBirth}
               phoneNumber={profile.phoneNumber}
               interesAndHobbies={profile.hobby}
               importantToKnow={profile.important}
               clothSize={profile.clothingSize}
               shoesSize={profile.shoeSize}
               vk={profile.vkontakte}
               telegram={profile.telegram}
               instagram={profile.instagram}
               facebook={profile.linkFacebook}
               onClick={() => handleDeleteFriendById(profile.userId)}
            />
         )}
         {variant === 'requests' && (
            <Profile
               variant="applicationToFriends"
               key={profile.userId}
               image={profile.image}
               fullName={profile.fullName}
               city={profile.country}
               email={profile.email}
               birthdate={profile.dateOfBirth}
               phoneNumber={profile.phoneNumber}
               interesAndHobbies={profile.hobby}
               importantToKnow={profile.important}
               clothSize={profile.clothingSize}
               shoesSize={profile.shoeSize}
               vk={profile.vkontakte}
               telegram={profile.telegram}
               instagram={profile.instagram}
               facebook={profile.linkFacebook}
               onClick={() => handleAceptRequestFriendById(profile.userId)}
            />
         )}

         <div>
            <TitleContent>
               <h3>Желаемые подарки</h3>
               <NavLink to="/user/wishes">Смотреть все</NavLink>
            </TitleContent>
            <HolidaysContainer>
               {newFriendWishes?.map((card) => (
                  <Card
                     key={card.wishId}
                     status={card.wishStatus}
                     holiday={card.holidayName}
                     cardName={card.wishName}
                     date={card.dateOfHoliday}
                     cardImage={card.wishImage}
                     variant="secondary"
                     meatballsOptions={isWishBooked(card.reservoirId, id)}
                  />
               ))}
            </HolidaysContainer>
         </div>
         <div>
            <TitleContent>
               <h3>Праздники</h3>
               <NavLink to="/user/holidays">Смотреть все</NavLink>
            </TitleContent>
            <HolidaysContainer>
               {newFriendHolidays?.map((holiday) => (
                  <Card
                     key={holiday.holidayId}
                     date={holiday.dateOfHoliday}
                     cardImage={holiday.image}
                     holiday={holiday.nameHoliday}
                     variant="tertiary"
                  />
               ))}
            </HolidaysContainer>
         </div>
         <div>
            <TitleContent>
               <h3>Благотворительность</h3>
               <NavLink to="/user/charities">Смотреть все</NavLink>
            </TitleContent>
            <HolidaysContainer>
               {newFriendsCharities?.map((charity) => (
                  <Card
                     key={charity.charityId}
                     date={charity.createdAt}
                     cardImage={charity.charityImage}
                     holiday={charity.nameCharity}
                     status={charity.status}
                     newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
                     variant="withStatusBottom"
                     meatballsOptions={isWishBooked(
                        charity.charityReservoirId,
                        id
                     )}
                  />
               ))}
            </HolidaysContainer>
         </div>
      </Container>
   )
}

export default ProfileDetail

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '55px',
})

const HolidaysContainer = styled('div')({
   display: 'flex',
   gap: '20px',
   width: '100%',
})

const TitleContent = styled('div')({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '24px',
   '&>a': {
      color: '#3772FF',
   },
})
