import { Box, Typography, styled } from '@mui/material'
import React from 'react'

export const SignUp = () => {
   return (
      <SignUpForm component="form">
         <RegistrationTitle variant="h1s">Регистрация</RegistrationTitle>
      </SignUpForm>
   )
}

const SignUpForm = styled(Box)({})

const RegistrationTitle = styled(Typography)({})
