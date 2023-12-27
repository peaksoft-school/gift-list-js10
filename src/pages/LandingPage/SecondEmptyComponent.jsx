import React from 'react'

import { styled, CardMedia } from '@mui/material'

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
         <p>{text}</p>
      </EmptyContent>
   )
}

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
