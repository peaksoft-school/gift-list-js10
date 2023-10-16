import { TextField as MuiTextField, styled } from '@mui/material'
import React from 'react'

export const TextArea = ({ value, onChange, labelText }) => {
   return (
      <StyledMuiTextField value={value} onChange={onChange} label={labelText} />
   )
}

const StyledMuiTextField = styled(MuiTextField)`
   width: 50.5rem;
   height: 6.938rem;
   border-radius: 60px;
   border: solid;
`
