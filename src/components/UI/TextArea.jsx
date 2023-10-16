import { FormControl, TextField as MuiTextField, styled } from '@mui/material'
import React from 'react'

export const TextArea = ({ value, onChange, labelText }) => {
   return (
      <StyledMuiFormControl>
         <StyledMuiTextField
            value={value}
            onChange={onChange}
            label={labelText}
         />
      </StyledMuiFormControl>
   )
}

const StyledMuiTextField = styled(MuiTextField)`
   width: 50.5rem;
   height: 6.938rem;
`

const StyledMuiFormControl = styled(FormControl)`
   .css-wxa1hi-MuiInputBase-root-MuiOutlinedInput-root {
      display: inline-block;
      padding: 8px 18px;
      width: 100%;
      height: 100%;
      border-radius: 6px;
   }
`
