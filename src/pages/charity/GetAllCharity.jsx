import { styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ComplaintModal, causes } from '../../components/ComplaintModal'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import {
   bookingCharityThunk,
   unbookingCharityThunk,
} from '../../store/booking/bookingThunk'
import {
   getAllCharity,
   getAllCharityByUserId,
} from '../../store/charity/charityThunk'
import { complaintCharityThunk } from '../../store/complaint/complaintThunk'
import {
   bookingOptions,
   unBookingOption,
} from '../../utils/constants/meatballsOptions'
import { EmptyComponent } from '../LandingPage/EmptyComponent'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'

const isWishBooked = (bookerId, myId, role, ownerId) => {
   if (role === 'USER') {
      if (!bookerId && ownerId !== myId) {
         return bookingOptions
      }
      if (bookerId === myId) {
         return unBookingOption
      }
   }
   return []
}

export const makeEventForUpdateTheAfterMeatballs = () =>
   providerEvent({ action: 'search', payload: Math.random() })

const handleMeatballsChange = (
   e,
   charityId,
   dispatch,
   toggleCompolaintModal,
   userId
) => {
   const selectedOption = e.target.innerText
   switch (selectedOption) {
      case 'Пожаловаться':
         toggleCompolaintModal(charityId)
         break
      case 'Забронировать':
         dispatch(
            bookingCharityThunk({
               charityId,
               isBookingAnonymous: false,
               userId,
               getSomethingsByUserId: () => getAllCharityByUserId(userId),
            })
         )
         break
      case 'Забронировать анонимно':
         dispatch(
            bookingCharityThunk({
               charityId,
               isBookingAnonymous: true,
               userId,
               getSomethingsByUserId: () => getAllCharityByUserId(userId),
            })
         )
         break
      default:
         dispatch(
            unbookingCharityThunk({
               charityId,
               userId,
               getSomethingsByUserId: () => getAllCharityByUserId(userId),
            })
         )
         break
   }
}

export const GetAllCharity = () => {
   const dispatch = useDispatch()
   const { charities, pending } = useSelector((state) => state.charity)
   const { id, role } = useSelector((state) => state.authLogin)
   const navigate = useNavigate()

   const [isComplaintModalOpenAndId, setIsComplaintModalOpenAndId] = useState({
      modalIsOpen: false,
      charityId: 0,
   })
   const toggleCompolaintModal = (charityId) =>
      setIsComplaintModalOpenAndId((prev) => ({
         modalIsOpen: !prev.modalIsOpen,
         charityId,
      }))
   const onSendComplaint = (complaintCause) => {
      const complaintRequest = {
         charityId: isComplaintModalOpenAndId.charityId,
      }
      if (typeof complaintCause === 'number') {
         complaintRequest.complaintType = causes.find(
            (cause) => cause.complaintId === complaintCause
         ).textInEnglish
      } else {
         complaintRequest.complaintType = 'OTHER'
         complaintRequest.complaintCause = complaintCause
      }
      dispatch(complaintCharityThunk(complaintRequest))
   }
   useEffect(() => {
      if (role === 'USER' && !charities.length) {
         dispatch(getAllCharityByUserId(id))
      }
      if (role === 'ADMIN') {
         dispatch(getAllCharity())
      }
   }, [])

   if (pending) {
      return 'Loading...'
   }

   const onGetById = (charityId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`${charityId}`)
   }

   return (
      <StyledCharityWrapper>
         {charities.map((charity) => (
            <Card
               key={charity.charityId}
               onGetThingById={() =>
                  onGetById(charity.charityId, charity.nameCharity)
               }
               variant="withStatusTop"
               ownerName={charity.fullName}
               ownerImage={charity.userImage}
               cardName={charity.nameCharity}
               cardImage={charity.charityImage}
               status={
                  charity.status === 'PENDING' ? 'Ожидание' : 'Забронирован'
               }
               date={charity.createdAt}
               newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
               bookerImage={charity.bookedUserImage}
               showBottomBooker="true"
               isBlock={charity.isBlock}
               handleChange={(e) =>
                  handleMeatballsChange(
                     e,
                     charity.charityId,
                     dispatch,
                     toggleCompolaintModal,
                     charity.userId
                  )
               }
               meatballsOptions={isWishBooked(
                  charity.charityReservoirId,
                  id,
                  role,
                  charity.userId
               )}
            />
         ))}
         {charities.length === 0 &&
            (role === 'USER' ? (
               <EmptyComponent
                  title="Вы пока еще не добавляли благотворительностей"
                  buttonText="Добавить благотворительность"
                  onClick={() => navigate('addCharity')}
               />
            ) : (
               <SecondEmptyComponent text="Пользователи еще не добавляли благотворительностей" />
            ))}
         <ComplaintModal
            toggleModal={toggleCompolaintModal}
            isOpen={isComplaintModalOpenAndId.modalIsOpen}
            onSend={onSendComplaint}
         />
      </StyledCharityWrapper>
   )
}

const StyledCharityWrapper = styled('div')({
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
})
