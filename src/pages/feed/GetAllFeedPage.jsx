import { Paper, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ComplaintModal, causes } from '../../components/ComplaintModal'
import { LoadingPage } from '../../components/loadingpage/LoadingPage'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import {
   bookingWishThunk,
   unBookingWishThunk,
} from '../../store/booking/bookingThunk'
import { complaintWishThunk } from '../../store/complaint/complaintThunk'
import { addToMyGifts, getFeedsThunk } from '../../store/feed/feedThunk'
import { meetballsFeedOptions } from '../../utils/constants/meatballs-options'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'
import { formatDate } from '../../utils/helpers/constants'

const isWishBooked = (bookerId, myId) => {
   if (!bookerId) {
      return meetballsFeedOptions.isWishFree
   }
   if (bookerId === myId) {
      return meetballsFeedOptions.iBookThisWish
   }
   return meetballsFeedOptions.strangersBook
}

const functionsRealtiveTypeOfThing = {
   WISH: (e, wishId, dispatch, toggleCompolaintModal, userId) => {
      const selectedOption = e.target.innerText
      switch (selectedOption) {
         case 'Пожаловаться':
            toggleCompolaintModal(wishId)
            break
         case 'Добавить в мои подарки':
            dispatch(addToMyGifts({ userId, wishId }))
            break
         case 'Забронировать':
            dispatch(bookingWishThunk({ wishId, isBookingAnonymous: false }))
            break
         case 'Забронировать анонимно':
            dispatch(bookingWishThunk({ wishId, isBookingAnonymous: true }))
            break
         default:
            dispatch(unBookingWishThunk(wishId))
            break
      }
   },
}

export const GetAllFeedPage = ({ isList }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isComplaintModalOpenAndId, setIsComplaintModalOpenAndId] = useState({
      modalIsOpen: false,
      wishId: 0,
   })
   const toggleCompolaintModal = (wishId) =>
      setIsComplaintModalOpenAndId((prev) => ({
         modalIsOpen: !prev.modalIsOpen,
         wishId,
      }))
   const { feeds, pending } = useSelector((state) => state.feedSlice)
   const { id } = useSelector((state) => state.authLogin)

   const onSendComplaint = (complaintCause) => {
      const complaintRequest = { wishId: isComplaintModalOpenAndId.wishId }
      if (typeof complaintCause === 'number') {
         complaintRequest.complaintType = causes.find(
            (cause) => cause.complaintId === complaintCause
         ).textInEnglish
      } else {
         complaintRequest.complaintType = 'OTHER'
         complaintRequest.complaintCause = complaintCause
      }
      dispatch(complaintWishThunk(complaintRequest))
   }

   const getById = (id, wishName, type) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`${id}`, { state: { type } })
   }

   useEffect(() => {
      dispatch(getFeedsThunk(id))
      if (feeds.length) {
         providerEvent({ action: 'showActionsButton', payload: false })
      }
   }, [])

   if (pending) {
      return <LoadingPage />
   }

   return (
      <>
         <StyledPaper>
            {feeds.map((feed) => {
               let {
                  thingId,
                  name,
                  date,
                  variant,
                  userId,
                  reservoirId,
                  reservoirImage,
                  ownerImage,
                  thingImage,
                  holidayName,
                  bookedStatus,
                  showBottomBooker,
                  showHoliday,
               } = {}
               if (feed.type === 'WISH') {
                  date = feed.dateOfHoliday
                  holidayName = feed.holidayName
                  userId = feed.ownerId
                  reservoirId = feed.reservoirId
                  reservoirImage = feed.reservoirImage
                  ownerImage = feed.userImage
                  thingId = feed.wishId
                  thingImage = feed.wishImage
                  name = feed.wishName
                  bookedStatus = feed.wishStatus
                  showBottomBooker = true
                  variant = 'primary'
               } else if (feed.type === 'CHARITY') {
                  thingId = feed.charityId
                  name = feed.nameCharity
                  date = feed.createdAt
                  userId = feed.userId
                  reservoirId = feed.charityReservoirId
                  reservoirImage = feed.bookedUserImage
                  ownerImage = feed.userImage
                  thingImage = feed.charityImage
                  bookedStatus = feed.status
                  showBottomBooker = true
                  variant = 'withStatusTop'
               } else {
                  thingId = feed.holidayId
                  name = feed.nameHoliday
                  date = feed.dateOfHoliday
                  userId = feed.firendId /* friend id */
                  ownerImage = feed.friendImage /* friend image */
                  thingImage = feed.image
                  holidayName = feed.nameHoliday
                  showBottomBooker = false
                  showHoliday = false
               }
               return (
                  <Card
                     handleChange={(e) => {
                        functionsRealtiveTypeOfThing[feed.type](
                           e,
                           thingId,
                           dispatch,
                           toggleCompolaintModal,
                           id
                        )
                     }}
                     onGetUserById={() => {
                        console.log(userId)
                        // here should be used userId
                     }}
                     variant={variant}
                     onGetThingById={() => getById(thingId, name, feed.type)}
                     key={`${thingId}${feed.type}`}
                     list={isList}
                     bookerImage={reservoirImage}
                     cardImage={thingImage}
                     cardName={name}
                     date={formatDate(date)}
                     showBottomBooker={showBottomBooker}
                     holiday={holidayName}
                     ownerImage={ownerImage}
                     ownerName={feed.fullName || ''}
                     meatballsOptions={isWishBooked(reservoirId, id)}
                     status={bookedStatus}
                     newOrOld={feed.condition === 'USED' ? 'Б/У' : 'Новый'}
                     showHoliday={showHoliday}
                  />
               )
            })}
            {!Object.keys(feeds).length && <SecondEmptyComponent />}
         </StyledPaper>
         <ComplaintModal
            toggleModal={toggleCompolaintModal}
            isOpen={isComplaintModalOpenAndId.modalIsOpen}
            onSend={onSendComplaint}
         />
      </>
   )
}

const StyledPaper = styled(Paper)({
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
   backgroundColor: 'transparent',
   border: 'none',
   boxShadow: 'none',
})
