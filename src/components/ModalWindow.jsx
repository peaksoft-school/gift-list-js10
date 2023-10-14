import { styled } from '@mui/material'
import React from 'react'

const DarkMode = styled('div')({
   top: '0',
   left: '0',
   width: '100%',
   height: '50rem',
   backgroundColor: '#23262f',
   zIndex: '100',
   justifyContent: 'center',
   display: 'flex',
   margin: '0',
})

const LightMode = styled('div')({
   backgroundColor: '#ffffff',
   marginTop: '3.125rem',
   width: '34rem',
   height: '35.875rem',
   borderRadius: '0.625rem',
})

export function ModalWindow({ children, onClose, isOpen }) {
   return (
      <div>
         {isOpen && (
            <DarkMode onClick={onClose}>
               <LightMode onClick={(e) => e.stopPropagation()}>
                  {children}
               </LightMode>
            </DarkMode>
         )}
      </div>
   )
}
