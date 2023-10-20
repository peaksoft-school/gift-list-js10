import { Box, styled } from '@mui/material'
import React from 'react'

export const Tabs = ({ count, isActive, title }) => {
   return (
      <StyledTabs isActive={isActive}>
         {title} <P isActive={isActive}>{count}</P>
      </StyledTabs>
   )
}

const StyledTabs = styled(Box)(({ isActive }) => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '6px',
   width: '50%',
   height: '3.6vh',
   borderRadius: '6px',
   alignItems: 'center',
   padding: '3px',
   background: isActive ? '#8639B5' : 'white',
   color: isActive ? 'white' : '#8D949E',
}))

const P = styled('span')(({ isActive }) => ({
   width: '3%',
   height: '2.5vh',
   borderRadius: '50px',
   fontSize: '0.875rem',
   fontWeight: 400,
   textAlign: 'center',
   paddingTop: '1px',
   background: isActive ? 'white' : '#595656',
   color: isActive ? '#8639B5' : 'white',
}))
