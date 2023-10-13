import { styled } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom'

const DarkMode = styled('div')({
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
   marginTop: '3.125rem',
   width: '34rem',
   height: '35.875rem',
   borderRadius: '0.625rem',
})
const modalRoot = document.getElementById('modal-root')

export function ModalWindow({ children, onClose, isOpen }) {
   if (!isOpen) {
      return null
   }

   return ReactDOM.createPortal(
      <div>
         <DarkMode onClick={onClose}>
            <LightMode onClick={(e) => e.stopPropagation()}>
               {children}
            </LightMode>
         </DarkMode>
      </div>,
      modalRoot
   )
}
