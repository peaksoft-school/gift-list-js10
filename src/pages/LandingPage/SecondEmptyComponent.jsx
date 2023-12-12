import React from 'react'

import { styled, CardMedia, CardContent } from '@mui/material'

import EmptyState from '../../assets/images/EmptyState.png'

export const SecondEmptyComponent = ({ text }) => {
   return (
      <Container>
         <EmptyContent>
            <CardMedia
               image={EmptyState}
               title="empty-image"
               component="img"
               alt="empty-image"
            />
            <CardText>Ничего нет</CardText>
            <p>{text}</p>
         </EmptyContent>
      </Container>
   )
}

const Container = styled('div')({
   background: '#F7F8FA',
   padding: '20px',
})

const EmptyContent = styled('div')({
   width: '30%',
   margin: '0 auto',
   height: '40vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '33px',
   alignItems: 'center',
   textAlign: 'center',
   '& > p': {
      width: '90%',
   },
})

const CardText = styled(CardContent)({
   fontSize: '1.25rem',
})
