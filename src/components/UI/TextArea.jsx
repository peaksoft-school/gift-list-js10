import {
   FormControl,
   FormLabel,
   TextField as MuiTextField,
   styled,
} from '@mui/material'
import React, { forwardRef } from 'react'

export const TextArea = forwardRef(
   (
      { helperText, error, value, onChange, placeholder, labelText, name },
      ref
   ) => {
      return (
         <FormControl fullWidth>
            {labelText && (
               <StyledFormLabel htmlFor="text-area" error={error}>
                  {labelText}
               </StyledFormLabel>
            )}
            <StyledMuiTextArea
               id="text-area"
               helperText={error && helperText}
               error={error}
               placeholder={placeholder}
               ref={ref}
               multiline
               value={value}
               onChange={onChange}
               name={name}
            />
         </FormControl>
      )
   }
)

const StyledFormLabel = styled(FormLabel)({
   paddingBottom: '7px',
})

const StyledMuiTextArea = styled(MuiTextField)(({ error }) => ({
   position: 'static !important',
   fontSize: '1.2rem',
   borderRadius: '6px',
   textarea: {
      '::placeholder': {
         color: error && '#F83B3B',
      },
   },
   '.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
      height: '6.938rem !important',
      overflow: 'inherit !important',
   },
   '.css-7sakbj-MuiFormHelperText-root': {
      textAlign: 'end',
      marginRight: '5px',
   },
}))
