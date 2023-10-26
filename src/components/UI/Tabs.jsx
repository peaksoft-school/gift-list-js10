import { styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Tabs = ({
   friendsCount,
   requestCount,
   routeToMyFriends,
   routeToRequest,
}) => {
   return (
      <StyledTabs>
         <StyledNavLink to={routeToMyFriends} className="tabs">
            Мои друзья
            <Counter>{friendsCount}</Counter>
         </StyledNavLink>
         <StyledNavLink to={routeToRequest} className="tabs">
            Запросы в друзья <Counter>{requestCount}</Counter>
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
   '&.active': {
      background: '#8639b5',
      color: 'white',
      '&> span': {
         background: 'white',
         color: '#8639B5',
      },
   },
})

const Counter = styled('span')({
   width: '3%',
   height: '2.5vh',
   borderRadius: '50px',
   fontSize: '0.875rem',
   fontWeight: 400,
   textAlign: 'center',
   paddingTop: '3px',
})
