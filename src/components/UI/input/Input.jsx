import * as React from 'react'
import { InputLabel, TextField } from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import { styled } from '@mui/material/styles'
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
         variant,
         borderError,
         labelText,
         readOnly = false,
         ...rest
      },
      ref
   ) => {
      return (
         <Container error={error}>
            {!variant && <InputLabel>{labelText}</InputLabel>}
            <StyledOutlinedInput
               value={value}
               name={name}
               bordercolor={borderError?.toString()}
               onChange={onChange}
               placeholder={placeholder}
               onBlur={onBlur}
               classes={{ focused: 'focused' }}
               id="outlined-basic"
               ref={ref}
               error={error}
               InputProps={{
                  readOnly,
                  endAdornment: (
                     <StyledInputAbornment position="end">
                        {error && <ErrorIcon />}
                     </StyledInputAbornment>
                  ),
               }}
               {...rest}
               autoComplete="off"
               autoFocus={false}
               fullWidth
               label={variant && labelText}
            />
            {error ? (
               <StyledFormHelperText error={error}>
                  {helperText}
               </StyledFormHelperText>
            ) : null}
         </Container>
      )
   }
)

const Container = styled('div')(({ error }) => ({
   '& .MuiInputLabel-root': {
      padding: '0',
      color: error ? '#F83B3B' : '#464444',
   },
}))

const StyledFormHelperText = styled(FormHelperText)(({ error }) => ({
   fontFamily: 'Inter',
   fontWeight: 500,
   fontSize: '0.8rem',
   display: 'flex',
   justifyContent: 'end',
   color: error ? '#F83B3B' : '#464444',
}))

const StyledOutlinedInput = styled(TextField)(({ error, bordercolor }) => ({
   '& .css-1s9x1kt-MuiInputBase-root-MuiOutlinedInput-root': {
      borderRadius: ' 0.4rem',
   },

   '& input': {
      color: error ? '#F83B3B' : '#464444',
      padding: '0.8rem 0 0.9rem 1rem',
   },
   '& svg': {
      width: '3rem',
      height: '1.5rem',
   },
   '&.MuiOutlinedInput-root': {
      border: bordercolor === 'true' ? '2px solid #F83B3B' : '2px solid grey',
      '&:hover ': {
         border:
            bordercolor === 'true' ? '2px solid #F83B3B' : '2px solid #6200EE',
      },
      '&.focused': {
         border:
            bordercolor === 'true' ? '3px solid #F83B3B' : '3px solid #6200EE',
      },
   },

   '&:hover': {
      webkitBoxShadow: '0 0 0 1.9rem white inset !important',
   },
}))

const StyledInputAbornment = styled(InputAdornment)`
   padding: 0;
`
