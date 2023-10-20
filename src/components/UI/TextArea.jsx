import { TextField as MuiTextField, styled } from '@mui/material'
import React, { forwardRef } from 'react'

export const TextArea = forwardRef(
   ({ helperText, error, value, onChange, placeholder, labelText }, ref) => {
      return (
         <StyledMuiTextArea
            helperText={helperText}
            error={error}
            placeholder={placeholder}
            ref={ref}
            multiline
            value={value}
            onChange={onChange}
            label={labelText}
            fullWidth
         />
      )
   }
)

const StyledMuiTextArea = styled(MuiTextField)({
   position: 'static !important',
   fontSize: '1.2rem',
   borderRadius: '6px',
   '.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
      height: '6.938rem !important',
   },
   '&::-webkit-resizer': {
      display: 'none',
   },
   '&:focus': {
      outline: 'none',
   },
})
