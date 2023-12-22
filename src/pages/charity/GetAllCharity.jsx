import { styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import {
   bookingCharityThunk,
   unbookingCharityThunk,
} from '../../store/booking/bookingThunk'
import {
   deleteCharityById,
   getAllCharity,
   getAllCharityByUserId,
   getCharityById,
} from '../../store/charity/charityThunk'
import {
   bookingOptions,
   meatballsDeleteAndEditOptions,
   unBookingOption,
} from '../../utils/constants/meatballs-options'
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
      if (ownerId === myId) {
         return meatballsDeleteAndEditOptions
      }
   }
   return []
}

export const makeEventForUpdateTheAfterMeatballs = () =>
   providerEvent({ action: 'search', payload: Math.random() })

const handleMeatballsChange = (e, charityId, dispatch, userId, navigate) => {
   const selectedOption = e.target.innerText
   switch (selectedOption) {
      case 'Редактировать':
         navigate(`/user/charity/editCharity`, { state: { charityId } })
         dispatch(getCharityById(charityId))
         break
      case 'Удалить':
         dispatch(deleteCharityById({ charityId }))
         break
      case 'Забронировать':
         dispatch(
            bookingCharityThunk({
               charityId,
               isBookingAnonymous: false,
               userId,
               getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
            })
         )
         break
      case 'Забронировать анонимно':
         dispatch(
            bookingCharityThunk({
               charityId,
               isBookingAnonymous: true,
               userId,
               getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
            })
         )
         break
      default:
         dispatch(
            unbookingCharityThunk({
               charityId,
               userId,
               getSomethingFunction: makeEventForUpdateTheAfterMeatballs,
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
      dispatch(getCharityById(charityId))
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
               status={charity.status}
               date={charity.createdAt}
               newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
               bookerImage={charity.bookedUserImage}
               showBottomBooker="true"
               isBlock={charity.isBlock ? 'true' : ''}
               handleChange={(e) =>
                  handleMeatballsChange(
                     e,
                     charity.charityId,
                     dispatch,
                     charity.userId,
                     navigate
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
      </StyledCharityWrapper>
   )
}

const StyledCharityWrapper = styled('div')({
   display: 'flex',
   gap: '20px',
   flexWrap: 'wrap',
})
