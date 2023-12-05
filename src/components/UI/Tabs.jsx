import { styled } from '@mui/material'
import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export const Tabs = ({ countFriends, countRequests }) => {
   const { pathname } = useLocation()
   return (
      <StyledTabs>
         <StyledNavLink
            pathname={pathname}
            to="/user/friends"
            className={`tabs ${pathname === '/user/friends' && 'activee'}`}
         >
            Мои друзья
            <Counter>{countFriends}</Counter>
         </StyledNavLink>
         <StyledNavLink
            to="/user/friends/requests"
            className={`tabs ${
               pathname === '/user/friends/requests' && 'activee'
            }`}
         >
            Запросы в друзья <Counter>{countRequests}</Counter>
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

const StyledNavLink = styled(NavLink)({
   width: '50%',
   height: '3.6vh',
   textAlign: 'center',
   borderRadius: '7px',
   textDecoration: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '6px',
   '&.tabs': {
      color: '#8D949E',
      '&> span': {
         color: 'white',
         background: '#595656',
      },
   },
   '&.activee': {
      background: '#8639b5',
      color: 'white',
      '&> span': {
         background: 'white',
         color: '#8639B5',
      },
   },
})

const Counter = styled('span')({
   width: '1.3vw',
   height: '2.5vh',
   borderRadius: '50%',
   fontSize: '0.875rem',
   fontWeight: 400,
   textAlign: 'center',
   paddingTop: '2px',
})
