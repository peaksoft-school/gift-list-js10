import React from 'react'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material'
import { Card } from '../../components/UI/card/Card'

export const WishesPage = () => {
   const friendWishes = useSelector((state) => state.friendWishes.wishes)
   console.log(friendWishes)

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
                  bookerImage={wish.reservoirImage}
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
