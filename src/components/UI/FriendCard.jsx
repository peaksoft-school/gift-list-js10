import { Box, Card, CardContent, CardMedia, styled } from '@mui/material'
import React from 'react'

import { CardImage } from '../../assets'

export const FriendCard = ({
   name,
   wish,
   textWish,
   holidays,
   textHolidays,
}) => {
   return (
      <Container>
         <CardContainer>
            <Image image={CardImage} component="img" title="card-image" />
            <CardContent>{name}</CardContent>
            <Text>
               <Holidays>
                  <P>{wish}</P>
                  <P2>{textWish}</P2>
               </Holidays>
               <Holidays>
                  <P>{holidays}</P>
                  <P2>{textHolidays}</P2>
               </Holidays>
            </Text>
         </CardContainer>
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
