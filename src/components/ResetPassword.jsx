import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { CloseModalIcon, EyeClose, EyeOpen } from '../assets'
import { Input } from './UI/input/Input'
import { Button } from './UI/Button'
import { resetPasswordValidationSchema } from '../utils/helpers/reset-password-validation'

export const ResetPassword = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(resetPasswordValidationSchema),
   })

   const onSubmit = () => {}

   // password state

   const [
      visibleAndInvisiblePasswordState,
      setVisibleAndInvisiblePasswordState,
   ] = useState(false)

   const changePasswordVisibleInvisibleStateHandler = () => {
      setVisibleAndInvisiblePasswordState((prevState) => !prevState)
   }

   // repeat password state

   const [
      visibleAndInvisibleRepeatPasswordState,
      setVisibleAndInvisibleRepeatPasswordState,
   ] = useState(false)

   const changeRepeatVisibleInvisibleStateHandler = () => {
      setVisibleAndInvisibleRepeatPasswordState((prevState) => !prevState)
   }
   return (
      <MainContainer component="div">
         <ResetPasswordForm component="form">
            <FormTitleAndCloseIcon>
               <FormTitle variant="h4">Смена пароля</FormTitle>
               <StyledCloseModalIcon />
            </FormTitleAndCloseIcon>

            <Input
               type={visibleAndInvisiblePasswordState ? 'text' : 'password'}
               placeholder="Введите новый пароль"
               {...register('password')}
               helperText={errors.password?.message}
               error={Boolean(errors.password)}
               InputProps={{
                  endAdornment: visibleAndInvisiblePasswordState ? (
                     <StyledOpenedEye
                        onClick={changePasswordVisibleInvisibleStateHandler}
                     />
                  ) : (
                     <StyledClosedEye
                        onClick={changePasswordVisibleInvisibleStateHandler}
                     />
                  ),
               }}
            />
            <Input
               type={
                  visibleAndInvisibleRepeatPasswordState ? 'text' : 'password'
               }
               placeholder="Повторите пароль"
               {...register('confirmPassword')}
               helperText={errors.confirmPassword?.message}
               error={Boolean(errors.confirmPassword)}
               InputProps={{
                  endAdornment: visibleAndInvisibleRepeatPasswordState ? (
                     <StyledOpenedEye
                        onClick={changeRepeatVisibleInvisibleStateHandler}
                     />
                  ) : (
                     <StyledClosedEye
                        onClick={changeRepeatVisibleInvisibleStateHandler}
                     />
                  ),
               }}
            />
            <StyledConfirmButton
               variant="primary"
               onClick={handleSubmit(onSubmit)}
            >
               Подтвердить
            </StyledConfirmButton>
         </ResetPasswordForm>
      </MainContainer>
   )
}

const MainContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const StyledConfirmButton = styled(Button)({
   marginTop: '0.5rem',
})

const ResetPasswordForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '30.125rem',
})

const StyledOpenedEye = styled(EyeOpen)({
   cursor: 'pointer',
})

const StyledClosedEye = styled(EyeClose)({
   cursor: 'pointer',
})

const StyledCloseModalIcon = styled(CloseModalIcon)({
   cursor: 'pointer',
})

const FormTitleAndCloseIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '1rem',
})

const FormTitle = styled(Typography)({
   fontWeight: '500',
   fontSize: '1.5rem',
})
