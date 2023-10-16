import { styled } from '@mui/material'
import React from 'react'

const DarkMode = styled('div')({
   position: 'fixed',
   top: '0',
   left: '0',
   width: '100%',
   height: '100%',
   backgroundColor: '#23262f',
   zIndex: '100',
   justifyContent: 'center',
   display: 'flex',
   margin: '0',
})

const LightMode = styled('div')({
   backgroundColor: '#ffffff',
   marginTop: '3.126rem',
   padding: '18.625rem',
   borderRadius: '0.625rem',
   maxHeight: '1rem',
})

export function Modal({ children, onClose, isOpen }) {
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
