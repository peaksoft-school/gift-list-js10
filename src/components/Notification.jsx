import { MoreVert } from '@mui/icons-material'
import { Box, IconButton, Menu, styled } from '@mui/material'
import React, { useState } from 'react'
import { notifications } from '../utils/helpers/constants'

export const Notification = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const openReadAll = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const open = Boolean(anchorEl)

   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <Container>
         <FirstBlock>
            <h3>Уведомления</h3>
            <IconButton
               aria-label="more"
               aria-haspopup="true"
               aria-controls="long-menu"
               onClick={openReadAll}
            >
               <MoreVert />
            </IconButton>
            <StyledMenu
               anchorEl={anchorEl}
               keepMounted
               onClose={handleClose}
               open={open}
            >
               Отметить все как прочитанные
            </StyledMenu>
         </FirstBlock>
         <ul>
            {notifications.map((item) => {
               return (
                  <List key={item.id}>
                     <img src={item.image} alt={item.name} />
                     <div>
                        <Name>{item.name}</Name>
                        <Para>{item.description}</Para>
                        <br />
                        <Date>{item.date}</Date>
                     </div>
                  </List>
               )
            })}
         </ul>
      </Container>
   )
}

const Container = styled(Box)({
   width: '23%',
   height: '40vh',
   borderRadius: '6px',
   boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
   position: 'absolute',
   top: '20px',
   left: '20px',
})

const FirstBlock = styled('div')({
   width: '100%',
   height: '6vh',
   display: 'flex',
   justifyContent: 'space-between',
   padding: '20px 16px',
   borderBottom: '1px solid #D9D9D9',
   '& > h3': {
      fontSize: '1.125rem',
      fontWeight: '500',
   },
})

const List = styled('li')({
   listStyle: 'none',
   width: '100%',
   height: '8vh',
   display: 'flex',
   gap: '12px',
   padding: '16px',
   ':active': {
      background: 'rgba(134, 57, 181, 0.10)',
   },
   '& > img': {
      width: '36px',
      height: '36px',
   },
})

const Para = styled('p')({
   display: 'inline',
   fontSize: '1rem',
   fontWeight: '400',
})

const Name = styled('span')({
   color: '#3772FF',
   fontSize: '1rem',
   fontWeight: '400',
})

const Date = styled('span')({
   color: '#949494',
   fontSize: '0.75rem',
   fontWeight: '400',
})

const StyledMenu = styled(Menu)({
   padding: '16px 16px',
   boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
})
