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

function mergeAndAddType({
   wishesResponses,
   charityResponses,
   holidayResponses,
}) {
   const mixedArray = [
      ...wishesResponses.map((response) => ({ ...response, type: 'WISH' })),
      ...charityResponses.map((response) => ({ ...response, type: 'CHARITY' })),
      ...holidayResponses.map((response) => ({ ...response, type: 'HOLIDAY' })),
   ]
   return mixedArray
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

   const getById = (id, wishName) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`${id}`)
   }

   useEffect(() => {
      dispatch(getFeedsThunk(id))
   }, [])

   const handleMeetaballsOption = (e, wishId) => {
      const selectedOption = e.target.innerText
      switch (selectedOption) {
         case 'Пожаловаться':
            toggleCompolaintModal(wishId)
            break
         case 'Добавить в мои подарки':
            dispatch(addToMyGifts({ userId: id, wishId }))
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
   }

   if (pending) {
      return <LoadingPage />
   }
   return (
      <>
         <StyledPaper>
            {Object.keys(feeds).length &&
               mergeAndAddType(feeds).map((feed) => {
                  console.log(feed)
                  let {
                     thindId,
                     name,
                     date,
                     variant,
                     userId,
                     reservoirId,
                     reservoirImage,
                     ownerImage,
                     thingImage,
                     holidayName,
                  } = {}
                  if (feed.type === 'WISH') {
                     thindId = feed.wishId
                     name = feed.wishName
                     date = feed.dateOfHoliday
                     userId = feed.ownerId
                     reservoirId = feed.reservoirId
                     reservoirImage = feed.reservoirImage
                     ownerImage = feed.userImage
                     thingImage = feed.wishImage
                     holidayName = feed.holidayName
                     variant = 'primary'
                  } else if (feed.type === 'CHARITY') {
                     thindId = feed.charityId
                     name = feed.nameCharity
                     date = feed.createdAt
                     userId = feed.userId
                     reservoirId = feed.charityReservoirId
                     reservoirImage = feed.bookedUserImage
                     ownerImage = feed.userImage
                     thingImage = feed.charityImage
                     variant = 'withStatusTop'
                  } else {
                     thindId = feed.holidayId
                     name = feed.nameHoliday
                     date = feed.dateOfHoliday
                     userId = feed.firendId /* friend id */
                     ownerImage = feed.friendImage /* friend image */
                     thingImage = feed.image
                     holidayName = feed.nameHoliday
                     variant = 'thirtiary'
                  }
                  return (
                     <Card
                        handleChange={(e) => {
                           handleMeetaballsOption(e, thindId)
                        }}
                        onGetUserById={() => {
                           console.log(userId)
                           // here should be used userId
                        }}
                        variant={variant}
                        onGetThingById={() => getById(thindId, name)}
                        key={thindId}
                        list={isList}
                        bookerImage={reservoirImage}
                        cardImage={thingImage}
                        cardName={name}
                        date={formatDate(date)}
                        holiday={holidayName}
                        ownerImage={ownerImage}
                        ownerName={feed.fullName || ''}
                        meetballsOptions={isWishBooked(reservoirId, id)}
                        status={feed.bookedUser?.status}
                        newOrOld={feed.condition === 'USED' ? 'Б/У' : 'Новый'}
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
