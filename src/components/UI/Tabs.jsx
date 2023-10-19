import { Box, styled } from '@mui/system'
import React from 'react'

export const Tabs = ({ friends, request }) => {
   return (
      <Container>
         <StyledTabs>
            Мои друзья <P>{friends}</P>
         </StyledTabs>

         <StyledTabs>
            Запросы в друзья <P>{request}</P>
         </StyledTabs>
      </Container>
   )
}

const Container = styled('div')({
   width: '100%',
   height: '4vh',
   fontSize: '1rem',
   fontWeight: 500,
   display: 'flex',
   border: '1px solid #8D949E',
   borderRadius: '6px',
   alignItems: 'center',
   justifyContent: 'center',
})

const StyledTabs = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
   gap: '6px',
   width: '50%',
   height: '3.6vh',
   color: '#8D949E',
   borderRadius: '6px',
   alignItems: 'center',
   padding: '3px',
   ':active': {
      background: '#8639B5',
      color: 'white',
      '& > p': {
         background: 'white',
         color: '#8639B5',
      },
   },
   ':hover': {
      background: '#8639B5',
      color: 'white',
      '& > p': {
         background: 'white',
         color: '#8639B5',
      },
   },
})

const P = styled('p')({
   width: '3%',
   height: '2.5vh',
   background: '#595656',
   borderRadius: '50px',
   color: 'white',
   fontSize: '0.875rem',
   fontWeight: 400,
   textAlign: 'center',
   paddingTop: '1px',
})
