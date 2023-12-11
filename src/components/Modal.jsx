import { Modal as MUIModal, styled } from '@mui/material'
import React from 'react'

const StyledModal = styled(MUIModal)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const ModalContent = styled('div')(({ padding }) => ({
   outline: 'none',
   backgroundColor: '#ffffff',
   borderRadius: '0.625rem',
   padding,
}))

export function Modal({ children, handleClose, isOpen, padding = '1rem' }) {
   return (
      <StyledModal open={isOpen} onClose={handleClose}>
         <ModalContent padding={padding}>{children}</ModalContent>
      </StyledModal>
   )
}
