// import { Box, styled } from '@mui/system'
import React from 'react'

export const Tabs = ({ children, request }) => {
   return (
      <div>
         {children}
         <span>{request}</span>
      </div>
      // <Container>
      //    <StyledTabs>
      //       Мои друзья <span>{friends}</span>
      //    </StyledTabs>
      //    <StyledTabs>
      //       Запросы в друзья <span>{request}</span>
      //    </StyledTabs>
      // </Container>
   )
}

// const Container = styled('div')({
//    width: '100%',
//    height: '4vh',
//    fontSize: '1rem',
//    fontWeight: 500,
//    display: 'flex',
//    border: '1px solid #8D949E',
//    borderRadius: '6px',
//    alignItems: 'center',
//    justifyContent: 'end',
// })

// const StyledTabs = styled(Box)({
//    width: '50%',
//    height: '3vh',
//    color: '#8D949E',
//    ':active': {
//       background: '#8639B5',
//       color: 'white',
//    },
//    ':hover': {
//       background: '#8639B5',
//       color: 'white',
//    },
// })
