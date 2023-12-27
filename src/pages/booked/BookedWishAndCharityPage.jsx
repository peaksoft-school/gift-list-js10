import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'

import { Card } from '../../components/UI/card/Card'
import {
   meatballsForBookingCharity,
   meatballsForBookingWish,
} from '../../utils/constants/meatballs-options'
import { addToMyGifts } from '../../store/feed/feedThunk'
import { unBookingWishThunk } from '../../store/booking/bookingThunk'
import { providerEvent } from '../../events/customEvents'
import { getAllReservedWish } from '../../store/wish/wishThunk'
import { getAllReservedCharity } from '../../store/charity/charityThunk'
import { SecondEmptyComponent } from '../LandingPage/SecondEmptyComponent'

export const isWishBooked = (alreadyInWishList) => {
   if (alreadyInWishList) {
      return meatballsForBookingWish.unBooking
   }
   return meatballsForBookingWish.addToMyWish
}

export const handleOptionsChange = {
   WISH: (e, wishId, dispatch, userId) => {
      const selectedOption = e.target.innerText

      if (selectedOption === 'Добавить в мои подарки') {
         dispatch(addToMyGifts({ userId, wishId }))
      } else {
         dispatch(
            unBookingWishThunk({
               wishId,
               userId,
               getSomethingFunction: getAllReservedWish,
            })
         )
      }
   },
   CHARITY: (charityId, dispatch, userId) => {
      dispatch(
         unBookingWishThunk({
            charityId,
            userId,
            getSomethingFunction: getAllReservedCharity,
         })
      )
   },
}

export const BookedWishAndCharityPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const bookedWishes = useSelector((state) => state.wish.wishes)
   const newBookedWishes = bookedWishes.slice(0, 3)
   const bookedCharity = useSelector((state) => state.charity.charities)
   const newBookedCharity = bookedCharity.slice(0, 3)

   useEffect(() => {
      dispatch(getAllReservedWish())
      dispatch(getAllReservedCharity())
   }, [])

   const openInnerWishPage = (wishId, wishName) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`/user/bookedWish/${wishId}`)
   }

   const openInnerCharityHandler = (charityId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`/user/bookedCharity/${charityId}`)
   }
   return (
      <Container>
         {newBookedCharity.length === 0 && newBookedWishes.length === 0 && (
            <SecondEmptyComponent text=" Вы пока ничего не бронировали!" />
         )}
         {Boolean(newBookedWishes.length) && (
            <StyledCard>
               <CardContainer>
                  <h3>Желания</h3>
                  <NavLink to="/user/bookedWish">Смотреть все</NavLink>
               </CardContainer>

               <StyledInfo>
                  {newBookedWishes?.map((wish) => (
                     <Card
                        key={wish.id}
                        cardImage={wish.image}
                        cardName={wish.nameWish}
                        holiday={wish.nameHoliday}
                        ownerName={wish.ownerFullName}
                        ownerImage={wish.ownerImage}
                        status={wish.wishStatus}
                        showBottomBooker="true"
                        date={wish.dateOfHoliday}
                        onGetThingById={() =>
                           openInnerWishPage(wish.id, wish.nameWish)
                        }
                        handleChange={(e) =>
                           handleOptionsChange.WISH(
                              e,
                              wish.id,
                              dispatch,
                              wish.reservoirId
                           )
                        }
                        meatballsOptions={isWishBooked(wish.alreadyInWishList)}
                     />
                  ))}
               </StyledInfo>
            </StyledCard>
         )}
         {Boolean(newBookedCharity.length) && (
            <StyledCard>
               <CardContainer>
                  <h3>Благотворительность</h3>
                  <NavLink to="/user/bookedCharity">Смотреть все</NavLink>
               </CardContainer>

               <StyledInfo>
                  {newBookedCharity?.map((charity) => (
                     <Card
                        key={charity.id}
                        newOrOld={
                           charity.condition === 'USED' ? 'Б/У' : 'Новый'
                        }
                        date={charity.dateOfHoliday}
                        cardImage={charity.image}
                        cardName={charity.charityName}
                        ownerName={charity.ownerFullName}
                        ownerImage={charity.ownerImage}
                        status={charity.wishStatus}
                        variant="withStatusTop"
                        handleChange={() =>
                           handleOptionsChange.CHARITY(
                              charity.id,
                              dispatch,
                              charity.reservoirId
                           )
                        }
                        meatballsOptions={meatballsForBookingCharity}
                        onGetThingById={() =>
                           openInnerCharityHandler(
                              charity.id,
                              charity.charityName
                           )
                        }
                        showBottomBooker="true"
                     />
                  ))}
               </StyledInfo>
            </StyledCard>
         )}
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '31px',
   minHeight: '100vh',
})
const StyledCard = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '20px',
})

const StyledInfo = styled('div')({
   width: '100%',
   display: 'flex',
   gap: '20px',
})
const CardContainer = styled('div')({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   '&>a': {
      color: '#3772FF',
   },
})
