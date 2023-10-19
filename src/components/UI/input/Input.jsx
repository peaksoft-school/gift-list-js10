import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { ErrorIcon } from '../../../assets'

export const Input = React.forwardRef(
   (
      {
         id,
         placeholder,
         helperText,
         value,
         error,
         onChange,
         icon,
         name,
         onBlur,
         borderError,
         ...rest
      },
      ref
   ) => {
      return (
         <>
            <StyledOutlinedInput
               value={value}
               name={name}
               bordercolor={borderError?.toString()}
               onChange={onChange}
               placeholder={placeholder}
               onBlur={onBlur}
               classes={{ focused: 'focused' }}
               id={id}
               ref={ref}
               error={error}
               endAdornment={
                  <StyledInputAbornment position="end">
                     {error && <StyledErrorIcon error={error} />}
                  </StyledInputAbornment>
               }
               {...rest}
               autoComplete="off"
               autoFocus={false}
               fullWidth
            />
            <StyledFormHelperText error={error}>
               {helperText}
            </StyledFormHelperText>
         </>
      )
   }
)

const StyledFormHelperText = styled(FormHelperText)(({ error }) => ({
   fontFamily: 'Inter',
   fontWeight: 400,
   fontSize: '0.8rem',
   display: 'flex',
   alignItems: 'center',
   marginBottom: '0.3rem',
   color: error ? 'red' : '#464444',
}))

const StyledOutlinedInput = styled(OutlinedInput)(({ error, bordercolor }) => ({
   height: '1.9rem',
   marginBottom: '0.9rem',
   border: error ? '1px solid red!important' : '',
   borderRadius: '0.3rem',
   color: error ? 'red' : '',
   paddingTop: '0.1rem',

   '&.MuiOutlinedInput-root': {
      height: '2rem',
      border: bordercolor === 'true' ? '1px solid red' : '1px solid grey',
      '&:hover ': {
         border: bordercolor === 'true' ? '1px solid red' : '1px solid #6200EE',
      },
      '&.focused': {
         border: bordercolor === 'true' ? '1px solid red' : '1px solid #6200EE',
      },
   },
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
   '&:hover': {
      webkitBoxShadow: '0 0 0 1.9rem white inset !important',
   },
}))

const StyledErrorIcon = styled(ErrorIcon)(({ error }) => ({
   color: error ? 'red' : '',
}))

const StyledInputAbornment = styled(InputAdornment)`
   padding: 0;
`
