import { Box, Card, CardContent, CardMedia, styled } from '@mui/material'
import React from 'react'

import CardImage from '../../assets/images/Card-Image.png'

const myFriends = [
   {
      name: 'Annette Black',
      textWish: 'Желаний',
      textHolidays: 'Праздников',
      id: '1',
   },
   {
      name: 'Annette Black',
      textWish: 'Желаний',
      textHolidays: 'Праздников',
      id: '2',
   },
]

export const MyFriendsCard = ({ wish = '12', holidays = '10' }) => {
   return (
      <Container>
         {myFriends.map((item) => {
            return (
               <CardContainer key={item.id}>
                  <Image image={CardImage} component="img" title="card-image" />
                  <CardContent>{item.name}</CardContent>
                  <Text>
                     <Holidays>
                        <P>{wish}</P>
                        <P2>{item.textWish}</P2>
                     </Holidays>
                     <Holidays>
                        <P>{holidays}</P>
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
   gap: '20px',

   borderRadius: '8px',
   background: '#F7F8FA',
   width: '100%',
   height: '100%',
})

const CardContainer = styled(Card)({
   width: '257px',
   height: '257px',
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
   width: '130px',
   margin: '0 auto',
})

const Text = styled('div')({
   display: 'flex',
   gap: '26px',
   marginTop: '10px',
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
   fontSize: '12px',
})
