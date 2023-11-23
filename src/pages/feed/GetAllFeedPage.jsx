import { Paper, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ComplaintModal, causes } from '../../components/ComplaintModal'
import { Card } from '../../components/UI/card/Card'
import { nameEvent } from '../../events/nameEvent'
import {
   bookingWishThunk,
   unBookingWishThunk,
} from '../../store/booking/bookingThunk'
import { complaintWishThunk } from '../../store/complaint/complaintThunk'
import { addToMyGifts, getFeedsThunk } from '../../store/feed/feedThunk'
import { meetballsFeedOptions } from '../../utils/constants/meatballs-options'

const isWishBooked = (bookerId, myId) => {
   if (!bookerId) {
      return meetballsFeedOptions.isWishFree
   }
   if (bookerId === myId) {
      return meetballsFeedOptions.iBookThisWish
   }
   return meetballsFeedOptions.strangersBook
}

export const GetAllFeedPage = ({ isList }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false)
   const toggleCompolaintModal = () => setIsComplaintModalOpen((prev) => !prev)
   const [wishId, setWishId] = useState(0)
   const {
      feedSlice: { feeds, pending },
      authLogin: { id },
   } = useSelector((state) => state)

   const onSendComplaint = (complaintCause) => {
      const complaintRequest = { wishId }
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
      nameEvent(wishName)
      navigate(`${id}`)
   }

   useEffect(() => {
      dispatch(getFeedsThunk())
   }, [])

   const handleMeetaballsOption = (e, wishId) => {
      const selectedOption = e.target.innerText
      switch (selectedOption) {
         case 'Пожаловаться':
            setWishId(wishId)
            toggleCompolaintModal()
            break
         case 'Добавить в мои подарки':
            dispatch(addToMyGifts({ userId: id, wishId }))
            break
         case 'Забронировать':
            dispatch(
               bookingWishThunk({ bookerId: id, isBookingAnonymous: false })
            )
            break
         case 'Забронировать анонимно':
            dispatch(
               bookingWishThunk({ bookerId: id, isBookingAnonymous: true })
            )
            break
         case 'Снять бронь':
            dispatch(unBookingWishThunk(wishId))
            break
         default:
            break
      }
      dispatch(getFeedsThunk())
   }

   if (pending) {
      return 'Loading...'
   }

   return (
      <>
         <StyledPaper>
            {feeds.map((feed) => (
               <Card
                  handleChange={(e) => {
                     handleMeetaballsOption(e, feed.wish.wishId)
                  }}
                  onClick={() => getById(feed.wish.wishId, feed.wish.wishName)}
                  key={feed.wish?.wishId}
                  list={isList}
                  bookerImage={feed?.bookedUser?.image}
                  cardImage={feed.wish?.image}
                  cardName={feed.wish?.wishName}
                  date={feed.wish?.wishDate}
                  holiday={feed.holiday?.nameHoliday}
                  ownerImage={feed.ownerUser?.image}
                  ownerName={feed.ownerUser?.fullName || ''}
                  meetballsOptions={isWishBooked(
                     feed.bookedUser?.userReservoirId,
                     id
                  )}
               />
            ))}
         </StyledPaper>
         <ComplaintModal
            toggleModal={toggleCompolaintModal}
            isOpen={isComplaintModalOpen}
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
