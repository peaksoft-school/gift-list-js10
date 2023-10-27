import { MoreHoriz, MoreVert } from '@mui/icons-material'
import { IconButton, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'

export const MeatBalls = ({ variant = 'horiz', handleChange, options }) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }
   return (
      <>
         <IconButton onClick={handleClick}>
            {variant === 'horiz' ? <MoreHoriz /> : <MoreVert />}
         </IconButton>
         <StyledMenu anchorEl={anchorEl} open={open} onClick={handleClose}>
            {options.map(({ title, icon }) => (
               <StyledMenuItem
                  key={title}
                  onClick={(e) => {
                     handleClose()
                     handleChange(e)
                  }}
                  value={title}
               >
                  {icon}
                  {title}
               </StyledMenuItem>
            ))}
         </StyledMenu>
      </>
   )
}

const StyledMenu = styled(Menu)({
   width: '20rem',
   left: '25px',
})

const StyledMenuItem = styled(MenuItem)({
   display: 'flex',
   gap: '10px',
})

// const StyledImage = styled('img')({
//    objectFit: 'contain',
//    height: '1rem',
//    width: '1rem',
// })
