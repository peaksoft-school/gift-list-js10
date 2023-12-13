import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import {
   acceptRequest,
   deleteFriendById,
   rejectRequests,
   sendRequestToUser,
} from '../../store/slices/my-friends/friendsThunk'
import { meetballsFriendOptions } from '../../utils/constants/meetballs-options'
import { Profile } from '../LandingPage/Profile'
import { getProfileByUserId } from '../../store/slices/profile-slice/profileByIdThunk'
import { getWishListByUserId } from '../../store/slices/wishes/wishThunk'
import { getHolidaysByUserId } from '../../store/slices/holidays/holidayThunk'
import { getCharitiesByUserId } from '../../store/slices/charities/chaririesThunk'
import {
   bookingCharityThunk,
   bookingWishThunk,
   unBookingWishThunk,
   unbookingCharityThunk,
} from '../../store/slices/booking/bookingThunk'
import { shoeSizeObject } from '../../utils/constants/constants'
import { providerEvent } from '../../events/customEvents'

export const isWishBooked = (bookerId, myId) => {
   let meatballsOptions = []
   if (bookerId === myId) {
      meatballsOptions = meetballsFriendOptions.unBooking
   } else if (!bookerId) {
      meatballsOptions = meetballsFriendOptions.booking
   }
   return meatballsOptions
}

export const handleOptionsChange = {
   WISH: (e, wishId, dispatch, userId) => {
      const selectedOption = e.target.innerText

      if (selectedOption === 'Забронировать') {
         dispatch(
            bookingWishThunk({
               wishId,
               isBookingAnonymous: false,
               userId,
               getSomethingFunction: getWishListByUserId,
            })
         )
      } else if (selectedOption === 'Забронировать анонимно') {
         dispatch(
            bookingWishThunk({
               wishId,
               isBookingAnonymous: true,
               userId,
               getSomethingFunction: getWishListByUserId,
            })
         )
      } else {
         dispatch(
            unBookingWishThunk({
               wishId,
               userId,
               getSomethingFunction: getWishListByUserId,
            })
         )
      }
   },
   CHARITY: (e, charityId, dispatch, userId) => {
      const selectedOption = e.target.innerText
      if (selectedOption === 'Забронировать') {
         dispatch(
            bookingCharityThunk({
               charityId,
               isBookingAnonymous: false,
               userId,
               getSomethingFunction: getCharitiesByUserId,
            })
         )
      } else if (selectedOption === 'Забронировать анонимно') {
         dispatch(
            bookingCharityThunk({
               charityId,
               isBookingAnonymous: true,
               userId,
               getSomethingFunction: getCharitiesByUserId,
            })
         )
      } else {
         dispatch(
            unbookingCharityThunk({
               charityId,
               userId,
               getSomethingFunction: getCharitiesByUserId,
            })
         )
      }
   },
}

export const ProfileDetail = ({ variant }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
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
      dispatch(deleteFriendById({ userId, navigate }))
   }

   const handleAcceptRequestFriendById = (userId, friendName) => {
      dispatch(
         acceptRequest({
            userId,
            name: friendName,
            isAccept: 'ACCEPT_REQUEST',
            navigate,
         })
      )
   }

   const handleRejectRequestFriendById = (userId, friendName) => {
      dispatch(
         rejectRequests({
            userId,
            name: friendName,
            isReject: 'REJECT_REQUEST',
            navigate,
         })
      )
   }

   const handleSendRequest = (friendId) => {
      dispatch(sendRequestToUser({ friendId, navigate }))
   }

   const handleOpenProfile = (userId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/addToMyFriends/${userId}`)
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
               shoesSize={shoeSizeObject[profile.shoeSize]}
               vk={profile.vkontakte}
               telegram={profile.telegram}
               instagram={profile.instagram}
               facebook={profile.linkFacebook}
               onDelete={() => handleDeleteFriendById(profile.userId)}
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
               shoesSize={shoeSizeObject[profile.shoeSize]}
               vk={profile.vkontakte}
               telegram={profile.telegram}
               instagram={profile.instagram}
               facebook={profile.linkFacebook}
               onAcceptFriend={() =>
                  handleAcceptRequestFriendById(
                     profile.userId,
                     profile.fullName
                  )
               }
               onRejectFriend={() =>
                  handleRejectRequestFriendById(
                     profile.userId,
                     profile.fullName
                  )
               }
            />
         )}

         {variant === 'addMyFriends' && (
            <Profile
               variant="primary"
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
               shoesSize={shoeSizeObject[profile.shoeSize]}
               vk={profile.vkontakte}
               telegram={profile.telegram}
               instagram={profile.instagram}
               facebook={profile.linkFacebook}
               onClick={() => handleSendRequest(profile.userId)}
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
                     showBottomBooker="true"
                     isBlock={card.isBlock}
                     bookerImage={card.reservoirImage}
                     onGetBookerById={() =>
                        handleOpenProfile(card.reservoirId, card.bookerName)
                     }
                     handleChange={(e) =>
                        handleOptionsChange.WISH(
                           e,
                           card.wishId,
                           dispatch,
                           card.ownerId
                        )
                     }
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
                     showBottomBooker="true"
                     isBlock={charity.isBlock}
                     bookerImage={charity.bookedUserImage}
                     onGetBookerById={() =>
                        handleOpenProfile(
                           charity.charityReservoirId,
                           charity.bookerName
                        )
                     }
                     handleChange={(e) =>
                        handleOptionsChange.CHARITY(
                           e,
                           charity.charityId,
                           dispatch,
                           charity.userId
                        )
                     }
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