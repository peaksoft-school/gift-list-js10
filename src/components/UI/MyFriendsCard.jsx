import { Box, Card, CardContent, CardMedia, styled } from '@mui/material'
import React from 'react'

import { CardImage } from '../../assets'

const myFriends = [
   {
      name: 'Annette Black',
      wish: 12,
      textWish: 'Желаний',
      holidays: 10,
      textHolidays: 'Праздников',
      id: '1',
   },
   {
      name: 'Annette Black',
      wish: 12,
      textWish: 'Желаний',
      holidays: 10,
      textHolidays: 'Праздников',
      id: '2',
   },
]

export const MyFriendsCard = () => {
   return (
      <Container>
         {myFriends.map((item) => {
            return (
               <CardContainer key={item.id}>
                  <Image image={CardImage} component="img" title="card-image" />
                  <CardContent>{item.name}</CardContent>
                  <Text>
                     <Holidays>
                        <P>{item.wish}</P>
                        <P2>{item.textWish}</P2>
                     </Holidays>
                     <Holidays>
                        <P>{item.holidays}</P>
                        <P2>{item.textHolidays}</P2>
                     </Holidays>
                  </Text>
               </CardContainer>
            )
         })}
      </Container>
   )
}

const Container = styled('div')({
   display: 'flex',
   gap: '1.25rem',

   borderRadius: '0.5rem',
   background: '#F7F8FA',
   width: '100%',
   height: '100%',
})

const CardContainer = styled(Card)({
   width: '18%',
   height: '35vh',
   margin: '1rem',
   boxShadow: 'none',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',

   backgroundImage:
      'linear-gradient(to bottom,rgba(134, 57, 181, 0.20) 40%, #fff 10% )',
})

const Image = styled(CardMedia)({
   width: '50%',
   margin: '0 auto',
})

const Text = styled('div')({
   display: 'flex',
   gap: '1.625rem',
   marginTop: '0.625rem',
})

const Holidays = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const P = styled('p')({
   fontSize: '1rem',
   color: '#000',
})

const P2 = styled('p')({
   color: '#606060',
   fontSize: '0.75rem',
})
