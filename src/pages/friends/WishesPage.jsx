import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { providerEvent } from '../../events/customEvents'
import { Card } from '../../components/UI/card/Card'
import { handleOptionsChange, isWishBooked } from './ProfileDetail'

export const WishesPage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const friendWishes = useSelector((state) => state.friendWishes.wishes)
   const { id } = useSelector((state) => state.authLogin)

   const handleOpenProfile = (userId, nameFriend) => {
      providerEvent({ action: 'name', payload: nameFriend })
      navigate(`/user/addToMyFriends/${userId}`)
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
                  bookerImage={wish.reservoirImage}
                  showBottomBooker="true"
                  handleChange={(e) =>
                     handleOptionsChange.WISH(e, wish.wishId, dispatch, id)
                  }
                  onGetOwnerById={() =>
                     handleOpenProfile(wish.ownerId, wish.fullName)
                  }
                  onGetBookerById={() => handleOpenProfile(wish.reservoirId)}
                  meatballsOptions={isWishBooked(wish.wishId, id)}
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