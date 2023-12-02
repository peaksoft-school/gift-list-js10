import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useParams } from 'react-router-dom'
import { Profile } from '../LandingPage/Profile'
import { getProfileByUserId } from '../../store/slices/profileThunk'
import { getWishListByUserId } from '../../store/slices/wishThunk'
import { Card } from '../../components/UI/card/Card'
import { meetballsFriendOptions } from '../../utils/constants/meetballs-options'
import { getHolidaysByUserId } from '../../store/slices/holidayThunk'
import { deleteFriendById } from '../../store/slices/friendsThunk'

export const ProfileDetail = () => {
   const dispatch = useDispatch()
   const { friendId } = useParams()
   console.log(friendId)

   const profile = useSelector((state) => state.profile.friendId)

   const friendWishes = useSelector((state) => state.friendWishes.wishes)
   console.log(friendWishes)

   const friendHolidays = useSelector((state) => state.holidays.holidays)
   console.log(friendHolidays)

   useEffect(() => {
      console.log(friendId)
      dispatch(getProfileByUserId(friendId))
      dispatch(getWishListByUserId(friendId))
      dispatch(getHolidaysByUserId(friendId))
   }, [dispatch])

   const handleDeleteFriendById = (friendId) => {
      dispatch(deleteFriendById(friendId))
   }

   return (
      <>
         <Profile
            variant="removeFromFriends"
            key={profile.phoneNumber}
            image={profile.image}
            fullName={profile.fullName}
            country={profile.country}
            email={profile.email}
            dateOfBirth={profile.dateOfBirth}
            phoneNumber={profile.phoneNumber}
            hobby={profile.hobby}
            important={profile.important}
            clothingSize={profile.clothingSize}
            shoeSize={profile.shoeSize}
            vkontakte={profile.vkontakte}
            telegram={profile.telegram}
            instagram={profile.instagram}
            linkFacebook={profile.linkFacebook}
            onClick={() => handleDeleteFriendById(profile.friendId)}
         />

         <h3>Желаемые подарки</h3>
         {friendWishes?.map((card) => (
            <Card
               key={card.id}
               status={card.wishStatus}
               holiday={card.holidayName}
               cardName={card.wishName}
               date={card.dateOfHoliday}
               cardImage={card.wishImage}
               variant="secondary"
               meetballsOptions={
                  (meetballsFriendOptions.booking,
                  meetballsFriendOptions.unBooking)
               }
            />
         ))}
         <h3>Праздники</h3>
         <HolidaysContainer>
            {friendHolidays?.map((holiday) => (
               <Card
                  key={holiday.holidayId}
                  date={holiday.dateOfHoliday}
                  cardImage={holiday.image}
                  cardName={holiday.nameHoliday}
                  variant="secondary"
                  meetballsOptions={
                     meetballsFriendOptions.booking ||
                     meetballsFriendOptions.unBooking
                  }
               />
            ))}
         </HolidaysContainer>
      </>
   )
}

export default ProfileDetail

const HolidaysContainer = styled('div')({
   display: 'flex',
   flexWrap: 'initial',
   gap: '20px',
   width: '100%',
   overflow: 'hidden',
   whiteSpace: 'nowrap',
})
