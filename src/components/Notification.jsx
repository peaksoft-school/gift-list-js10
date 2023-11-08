import { MoreVert } from '@mui/icons-material'
import { Box, IconButton, Menu, MenuItem, styled } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { notifications } from '../utils/helpers/constants'
import { NotificationIcon } from '../assets'

export const Notification = () => {
   const [anchorEl, setAnchorEl] = useState(null)
   const [isOpenNotifications, setIsOpenNotifications] = useState(false)
   const [isRead, setIsRead] = useState([])
   const [isNotReadenNotificationExist, setIsNotReadenNotificationExist] =
      useState(0)

   useEffect(() => {
      setIsRead((prevState) => {
         const newArray = prevState
         notifications.forEach((notification, index) => {
            if (prevState[index]?.id !== notification.id)
               newArray.push({ id: notification.id, isRead: false })
         })
         return newArray
      })

      setIsNotReadenNotificationExist(
         isRead.filter((notification) => {
            return !notification.isRead
         }).length
      )
   }, [notifications, isRead])

   const openReadAll = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const markAsReadHandle = () => {
      setIsRead((prevState) => {
         const newArray = prevState
         return newArray.map((notification) => {
            return {
               ...notification,
               isRead: true,
            }
         })
      })
   }

   const isReadHandle = (id) => {
      setIsRead((prevState) => {
         const newArray = prevState
         return newArray.map((notification) => {
            if (notification.id === id) {
               return {
                  ...notification,
                  isRead: true,
               }
            }
            return notification
         })
      })
   }
   const open = Boolean(anchorEl)

   const handleClose = () => {
      setAnchorEl(null)
   }
   const isOpenNotificationItem = () => {
      setIsOpenNotifications(!isOpenNotifications)
   }
   const handleCloseNorif = () => {
      setIsOpenNotifications(false)
   }

   return (
      <>
         <NotificationContainer>
            <NotificationIcon onClick={isOpenNotificationItem} />
            {isNotReadenNotificationExist > 0 ? <Circle /> : null}
         </NotificationContainer>

         {isOpenNotifications ? (
            <StyledBackdrop onClick={handleCloseNorif}>
               <Container onClick={(e) => e.stopPropagation()}>
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
                        open={open}
                        keepMounted
                        anchorEl={anchorEl}
                        onClose={handleClose}
                     >
                        <MenuItem onClick={markAsReadHandle}>
                           Отметить все как прочитанные
                        </MenuItem>
                     </StyledMenu>
                  </FirstBlock>
                  <ScrollContainer>
                     {notifications.length > 0 ? (
                        notifications.map((item, i) => (
                           <List
                              key={item.id}
                              onClick={() => isReadHandle(item.id)}
                           >
                              <img src={item.image} alt={item.name} />

                              <div>
                                 <Name>{item.name}</Name>
                                 <Para>{item.description}</Para>
                                 <Date>{item.date}</Date>
                              </div>
                              <div> {!isRead[i].isRead && <Circle />}</div>
                           </List>
                        ))
                     ) : (
                        <Empty>У вас пока нет уведомлений!</Empty>
                     )}
                  </ScrollContainer>
               </Container>
            </StyledBackdrop>
         ) : null}
      </>
   )
}

const Container = styled(Box)({
   width: '25%',
   height: '45%',
   borderRadius: '6px',
   boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
   display: 'flex',
   flexDirection: 'column',
   gap: '16px',
   position: 'absolute',
   transform: 'translate(-35%, -35%)',
   top: '150px',
   right: '200px',
   zIndex: 2,
   background: '#fff',
})

const StyledBackdrop = styled('div')({
   width: '100%',
   height: '100vh',
   position: 'fixed',
   zIndex: 0,
   background: 'transparet',
   top: 0,
   left: 0,
   opacity: 1,
   visibility: 'visible',
})

const ScrollContainer = styled('div')({
   overflow: 'auto',
})

const Empty = styled('p')({
   padding: '10px',
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
   height: '10vh',
   display: 'flex',
   gap: '16px',
   padding: '16px',
   overscrollBehavior: 'contain',
   ':active': {
      background: 'rgba(134, 57, 181, 0.10)',
   },
   '& > img': {
      width: '11%',
      height: '4vh',
   },
})

const Para = styled('p')({
   fontSize: '1rem',
   fontWeight: '400',
   height: '1.5rem',
   width: '16vw',
   overflow: 'hidden',
   whiteSpace: 'nowrap',
   textOverflow: 'ellipsis',
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
   '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.16)',
   },
   position: 'absolute',
   left: '70px',
   top: '0',
})

const Circle = styled('p')({
   width: '12px',
   height: '12px',
   borderRadius: '50px',
   padding: '5px',
   background: '#8639B5',
})

const NotificationContainer = styled('div')({
   width: '50px',
   height: '50px',
   display: 'flex',
})
