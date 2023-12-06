import React from 'react'

import { CardContent, CardMedia, styled } from '@mui/material'

import EmptyState from '../../assets/images/EmptyState.png'

export const SecondEmptyComponent = ({ text }) => {
   return (
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
   )
}

const EmptyContent = styled('div')({
   width: '500px',
   margin: '0 auto',
   display: 'flex',
   flexDirection: 'column',
   gap: '33px',
   alignItems: 'center',
   textAlign: 'center',
   '& > p': {
      width: '335px',
   },
})

const CardText = styled(CardContent)({
   fontSize: '1.25rem',
})
