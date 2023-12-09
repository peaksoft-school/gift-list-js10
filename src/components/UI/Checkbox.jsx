import React from 'react'
import {
   FormControlLabel,
   Checkbox as MuiCheckbox,
   styled,
} from '@mui/material'

export const Checkbox = ({
   disabled,
   onChange,
   value,
   labelTitle,
   ...rest
}) => {
   return (
      <FormControlLabel
         control={
            <StyledMuiCheckbox
               disabled={disabled}
               onChange={onChange}
               value={value}
            />
         }
         label={labelTitle}
         {...rest}
      />
   )
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
