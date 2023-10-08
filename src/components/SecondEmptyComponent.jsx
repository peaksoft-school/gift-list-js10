import React from 'react'

import { styled, Typography, CardMedia, CardContent } from '@mui/material'

import EmptyState from '../assets/images/EmptyState.png'

export const SecondEmptyComponent = () => {
   return (
      <Container>
         <Typography variant="h6">Лента</Typography>
         <EmptyContent>
            <CardMedia
               image={EmptyState}
               title="empty-image"
               component="img"
               alt="empty-image"
            />
            <CardContent sx={{ fontSize: 20 }}>Ничего нет</CardContent>
            <p style={{ width: '335px' }}>
               Здесь будет отображен список желаемых подарков ваших друзей.
            </p>
         </EmptyContent>
      </Container>
   )
}

const Container = styled('div')({
   background: '#F7F8FA',
   padding: '20px',
})

const EmptyContent = styled('div')({
   width: '600px',
   margin: '0 auto',
   height: '100vh',
   display: 'flex',
   flexDirection: 'column',
   gap: '33px',
   alignItems: 'center',
   textAlign: 'center',
})
