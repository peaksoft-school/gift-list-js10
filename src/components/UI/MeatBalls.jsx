import { MoreHoriz, MoreVert } from '@mui/icons-material'
import { IconButton, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'
import { ArrowIcon } from '../../assets'

export const MeatBalls = ({
   variant = 'horiz',
   handleChange,
   options,
   top = '0',
   left = '25',
}) => {
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = (event) => {
      event.stopPropagation()
      setAnchorEl(event.currentTarget)
   }
   const handleClose = (event) => {
      event.stopPropagation()
      setAnchorEl(null)
   }
   return (
      <>
         <IconButton onClick={handleClick}>
            {variant !== 'profile' &&
               (variant === 'horiz' ? <MoreHoriz /> : <MoreVert />)}
            {variant === 'profile' && <ArrowIcon />}
         </IconButton>
         <StyledMenu
            left={left}
            top={top}
            anchorEl={anchorEl}
            open={open}
            onClick={handleClose}
         >
            {options.map(({ title, icon: Icon }) => (
               <StyledMenuItem
                  key={title}
                  onClick={(e) => {
                     e.stopPropagation()
                     handleClose(e)
                     handleChange(e)
                  }}
                  value={title}
               >
                  {Icon && React.isValidElement(Icon) && Icon}
                  {title}
               </StyledMenuItem>
            ))}
         </StyledMenu>
      </>
   )
}

const StyledMenu = styled(Menu)(({ left, top }) => ({
   width: '20rem',
   left: `${left}px`,
   top: `${top}px`,
}))

const StyledMenuItem = styled(MenuItem)({
   display: 'flex',
   gap: '10px',
})
