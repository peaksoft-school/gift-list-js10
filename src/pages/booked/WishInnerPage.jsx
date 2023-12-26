import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Card } from '../../components/UI/card/Card'
import { providerEvent } from '../../events/customEvents'
import { isWishBooked } from './BookedWishAndCharityPage'

export const WishInnerPage = ({ handleOptionsChange }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const reservedWish = useSelector((state) => state.wish.wishes)

   const openInnerWishPage = (wishId, wishName) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`/user/feed/${wishId}/WISH`)
   }

   return (
      <Container>
         <h3>Желания</h3>
         <StyledCard>
            {reservedWish?.map((wish) => (
               <Card
                  key={wish.id}
                  cardImage={wish.image}
                  cardName={wish.nameWish}
                  holiday={wish.nameHoliday}
                  ownerName={wish.ownerFullName}
                  ownerImage={wish.ownerImage}
                  status={wish.wishStatus}
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
         </StyledCard>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
})

const StyledCard = styled('div')({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})
