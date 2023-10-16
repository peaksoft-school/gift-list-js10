import { TextareaAutosize, styled } from '@mui/material'
import React from 'react'

export const TextArea = ({ value, onChange, labelText }) => {
   return (
      <StyledMuiTextArea value={value} onChange={onChange} label={labelText} />
   )
}

const StyledMuiTextArea = styled(TextareaAutosize)({
   position: 'static !important',
   width: '50.5rem !important',
   height: '6.938rem !important',
   fontSize: '1.2rem',
   padding: '8px 18px',
   borderRadius: '6px',
   '&::-webkit-resizer': {
      display: 'none',
   },
   '&:focus': {
      outline: 'none',
   },
})
