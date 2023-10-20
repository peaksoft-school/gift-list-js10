import { Box, Card, CardContent, CardMedia, styled } from '@mui/material'
import React from 'react'

export const FriendCard = ({
   name,
   wish,
   textWish,
   holidays,
   textHolidays,
   image,
}) => {
   return (
      <Container>
         <CardContainer>
            <Image image={image} component="img" title="card-image" />
            <CardContent>{name}</CardContent>
            <Text>
               <Holidays>
                  <Span>{wish}</Span>
                  <Span2>{textWish}</Span2>
               </Holidays>
               <Holidays>
                  <Span>{holidays}</Span>
                  <Span2>{textHolidays}</Span2>
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

const Span = styled('span')({
   fontSize: '1rem',
   color: '#000',
})

const Span2 = styled('span')({
   color: '#606060',
   fontSize: '0.75rem',
})
