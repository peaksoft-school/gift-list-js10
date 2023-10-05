import React from 'react'
import { Checkbox as MuiCheckbox, styled } from '@mui/material'

export const Checkbox = ({ disabled = false }) => {
   return <StyledMuiCheckbox disabled={disabled} />
}

const StyledMuiCheckbox = styled(MuiCheckbox)`
   .MuiSvgIcon-root {
      width: 1.25rem;
      height: 1.25rem;
   }
   color: #87898e;
   &.Mui-checked {
      color: #8639b5;
   }
   &:hover {
      color: #8639b5;
   }
   &:disabled {
      color: #0000001f;
   }
   &.MuiSvgIcon {
      font-size: 1rem;
   }
`
