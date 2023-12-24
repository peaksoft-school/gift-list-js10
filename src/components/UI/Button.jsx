import { Button as UiButton, styled } from '@mui/material'
import React from 'react'

export const Button = ({
   children,
   variant = 'outlined',
   onClick,
   ...rest
}) => {
   return (
      <StyledButton variant={variant} onClick={onClick} {...rest}>
         {children}
      </StyledButton>
   )
}

const StyledVariants = {
   primary: {
      backgroundColor: '#8639b5',
      color: 'white',
      fontSize: '1rem',
      fontWeight: 500,
      border: 'none',
      textTransform: 'none',
      padding: ' 0.625rem 1.5rem',
      ':hover': { backgroundColor: '#612386' },
      ':active': { backgroundColor: '#793686' },
      ':disabled': { backgroundColor: 'rgba(28, 27, 31, 0.12)' },
   },
   outlined: {
      backgroundColor: '#fafafa',
      color: '#8D949E',
      fontSize: '0.875',
      fontWeight: 500,
      padding: ' 0.625rem 1.625rem',
      border: '1px solid #8D949E',
      ':hover': {
         backgroundColor: '#612386',
         color: 'white',
         border: '1px solid white',
      },
      ':active': {
         backgroundColor: '#AB62D8',
         color: 'white',
         border: '1px solid white',
      },
      ':disabled': {
         backgroundColor: 'white',
         border: '1px solid rgba(28, 27, 31, 0.12)',
         color: 'rgba(28, 27, 31, 0.12)',
      },
   },
   contained: {
      backgroundColor: '#FA2B56',
      color: 'white',
      fontSize: '1rem',
      fontWeight: 600,
      border: 'none',
      padding: ' 0.625rem 1.5rem',
      boxShadow: 'none',
      ':hover': { backgroundColor: '#DD0B37', boxShadow: 'none' },
      ':active': { backgroundColor: '#ED6380', boxShadow: 'none' },
      ':disabled': { backgroundColor: 'rgba(28, 27, 31, 0.12)' },
   },
}

const getVariants = (props) => {
   const currentVariant = StyledVariants[props.variant]
   return currentVariant
}

const StyledButton = styled(UiButton)`
   border-radius: 6px;
   outline: none;
   cursor: pointer;
   ${getVariants};
`
