import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material'
import {
   getAllReservedCharity,
   getAllReservedWish,
} from '../../store/reserved/reservedThunk'
import { Card } from '../../components/UI/card/Card'
import {
   meatballsForBookingCharity,
   meatballsForBookingWish,
} from '../../utils/constants/meatballs-options'
import { addToMyGifts } from '../../store/feed/feedThunk'
import { unBookingWishThunk } from '../../store/booking/bookingThunk'
import { providerEvent } from '../../events/customEvents'

export const isWishBooked = (bookerId, myId) => {
   if (bookerId === myId) {
      return meatballsForBookingWish.iBookThisWish
   }
   return meatballsForBookingWish.strangersBook
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
   const bookedWishes = useSelector((state) => state.booked.bookedWish)
   const newBokedWishes = bookedWishes.slice(0, 3)
   const bookedCharity = useSelector((state) => console.log(state))
   console.log(bookedCharity)

   const { id } = useSelector((state) => state.authLogin)

   useEffect(() => {
      dispatch(getAllReservedWish())
      dispatch(getAllReservedCharity())
   }, [])

   const openInnerWishPage = (wishId, wishName) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`/user/feed/${wishId}/WISH`)
   }

   const openInnerCharityHandler = (charityId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`/user/feed/${charityId}/CHARITY`)
   }
   return (
      <Container>
         <StyledCard>
            <CardContainer>
               <h3>Желания</h3>
               <NavLink>Смотреть все</NavLink>
            </CardContainer>

            {newBokedWishes?.map((wish) => (
               <Card
                  key={wish.id}
                  cardImage={wish.image}
                  cardName={wish.nameWish}
                  holiday={wish.nameHoliday}
                  ownerName={wish.ownerFullName}
                  ownerImage={wish.ownerImage}
                  status={wish.wishStatus}
                  date={wish.dateOfHoliday}
                  showBottomBooker="true"
                  onGetThingById={() =>
                     openInnerWishPage(wish.id, wish.nameWish)
                  }
                  handleChange={(e) =>
                     handleOptionsChange.WISH(
                        e,
                        wish.id,
                        dispatch,
                        wish.ownerId
                     )
                  }
                  meatballsOptions={isWishBooked(wish.bookerId, id)}
               />
            ))}
         </StyledCard>
         <StyledCard>
            <CardContainer>
               <h3>Благотворительность</h3>
               <NavLink>Смотреть все</NavLink>
            </CardContainer>
            {bookedCharity?.map((charity) => (
               <Card
                  key={charity.id}
                  holiday={charity.charityName}
                  date={charity.dateOfHoliday}
                  cardImage={charity.image}
                  handleChange={() =>
                     handleOptionsChange.CHARITY(
                        charity.id,
                        dispatch,
                        charity.userId
                     )
                  }
                  meatballsOptions={meatballsForBookingCharity}
                  onGetThingById={() =>
                     openInnerCharityHandler(charity.id, charity.charityName)
                  }
               />
            ))}
         </StyledCard>
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
const CardContainer = styled('div')({
   width: '100%',
   display: 'flex',
   justifyContent: 'space-between',
   '&>a': {
      color: '#3772FF',
   },
})
