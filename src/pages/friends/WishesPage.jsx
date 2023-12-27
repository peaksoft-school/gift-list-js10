import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { providerEvent } from '../../events/customEvents'
import { Card } from '../../components/UI/card/Card'
import { handleOptionsChange, isWishBooked } from './ProfileDetail'

export const WishesPage = ({ isList }) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const friendWishes = useSelector((state) => state.wish.wishes)
   const { id } = useSelector((state) => state.authLogin)

   const handleOpenProfile = (userId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/addToMyFriends/${userId}`)
   }

   const openInnerWishPage = (wishId, wishName) => {
      providerEvent({ action: 'name', payload: wishName })
      navigate(`wishes/${wishId}`)
   }

   return (
      <Container>
         <h2>Желаемые подарки</h2>
         <CardContainer>
            {friendWishes.map((wish) => (
               <Card
                  key={wish.wishId}
                  status={wish.wishStatus}
                  holiday={wish.holidayName}
                  cardName={wish.wishName}
                  date={wish.dateOfHoliday}
                  cardImage={wish.wishImage}
                  ownerImage={wish.userImage}
                  ownerName={wish.fullName}
                  isBlock={wish.isBlock}
                  list={isList}
                  bookerImage={wish.reservoirImage}
                  showBottomBooker="true"
                  handleChange={(e) =>
                     handleOptionsChange.WISH(e, wish.wishId, dispatch, id)
                  }
                  onGetBookerById={() =>
                     handleOpenProfile(wish.reservoirId, wish.reservoirFullName)
                  }
                  meatballsOptions={isWishBooked(wish.wishId, id)}
                  onGetThingById={() =>
                     openInnerWishPage(wish.wishId, wish.wishName)
                  }
               />
            ))}
         </CardContainer>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',
   gap: '30px',
})

const CardContainer = styled('div')({
   display: 'flex',
   flexWrap: 'wrap',
   width: '100%',
   gap: '20px',
})
