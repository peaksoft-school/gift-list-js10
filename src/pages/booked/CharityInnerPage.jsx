import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { providerEvent } from '../../events/customEvents'
import { Card } from '../../components/UI/card/Card'
import { handleOptionsChange } from './BookedWishAndCharityPage'
import { meatballsForBookingCharity } from '../../utils/constants/meatballs-options'

export const CharityInnerPage = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const reservedCharity = useSelector((state) => state.charity.charities)

   const openInnerCharityHandler = (charityId, charityName) => {
      providerEvent({ action: 'name', payload: charityName })
      navigate(`/user/bookedCharity/${charityId}`)
   }
   return (
      <Container>
         <h3>Благотворительность</h3>
         <StyledCard>
            {reservedCharity?.map((charity) => (
               <Card
                  key={charity.id}
                  newOrOld={charity.condition === 'USED' ? 'Б/У' : 'Новый'}
                  date={charity.dateOfHoliday}
                  cardImage={charity.image}
                  cardName={charity.charityName}
                  ownerName={charity.ownerFullName}
                  ownerImage={charity.ownerImage}
                  status={charity.wishStatus}
                  variant="withStatusTop"
                  showBottomBooker="true"
                  handleChange={() =>
                     handleOptionsChange.CHARITY(
                        charity.id,
                        dispatch,
                        charity.reservoirId
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
   gap: '30px',
})

const StyledCard = styled('div')({
   width: '100%',
   display: 'flex',
   flexWrap: 'wrap',
   gap: '20px',
})
