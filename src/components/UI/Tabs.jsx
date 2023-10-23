import { styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Tabs = ({ friendsCount, requestCount }) => {
   return (
      <StyledTabs>
         <StyledNavLink>
            Мои друзья
            <Paragraph>{friendsCount}</Paragraph>
         </StyledNavLink>
         <StyledNavLink>
            Запросы в друзья <Paragraph>{requestCount}</Paragraph>
         </StyledNavLink>
      </StyledTabs>
   )
}

const StyledTabs = styled('div')({
   display: 'flex',
   width: '100%',
   borderRadius: '7px',
   border: '0.50px solid #797979',
   padding: '3px',
})

// const StyledNavLink = styled(NavLink)({
//    width: '50%',
//    height: '3.6vh',
//    textAlign: 'center',
//    borderRadius: '7px',
//    textDecoration: 'none',
//    color: '#8D949E',
//    display: 'flex',
//    alignItems: 'center',
//    justifyContent: 'center',
//    gap: '6px',
//    background: isActive ? '#8639B5' : 'white',
// })

const Paragraph = styled('span')({
   width: '3%',
   height: '2.5vh',
   borderRadius: '50px',
   fontSize: '0.875rem',
   fontWeight: 400,
   textAlign: 'center',
   paddingTop: '3px',
   background: 'white',
   // background: isActive ? 'white' : '#595656',
   // color: isActive ? '#8639B5' : 'white',
})

const StyledNavLink = styled(NavLink)(({ isActive }) => ({
   width: '50%',
   height: '3.6vh',
   textAlign: 'center',
   borderRadius: '7px',
   textDecoration: 'none',
   color: '#8D949E',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '6px',
   background: isActive ? '#8639B5' : 'white',
}))
