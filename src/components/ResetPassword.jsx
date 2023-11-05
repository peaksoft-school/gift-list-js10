/* eslint-disable consistent-return */

import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CloseModalIcon, EyeClose, EyeOpen } from '../assets'
import { Input } from './UI/input/Input'
import { Button } from './UI/Button'

export const ResetPassword = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm()

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
      <ResetPasswordForm component="form">
         <FormTitleAndCloseIcon>
            <FormTitle variant="h4">Смена пароля</FormTitle>
            <CloseModalIcon style={{ cursor: 'pointer' }} />
         </FormTitleAndCloseIcon>

         <Input
            type={visibleAndInvisiblePasswordState ? 'text' : 'password'}
            placeholder="Введите новый пароль"
            {...register('password', {
               required: 'Это обязательное поле',
            })}
            helperText={errors.password?.message}
            error={Boolean(errors.password)}
            InputProps={{
               endAdornment: visibleAndInvisiblePasswordState ? (
                  <EyeOpen
                     style={{ cursor: 'pointer' }}
                     onClick={changePasswordVisibleInvisibleStateHandler}
                  />
               ) : (
                  <EyeClose
                     style={{ cursor: 'pointer' }}
                     onClick={changePasswordVisibleInvisibleStateHandler}
                  />
               ),
            }}
         />
         <Input
            type={visibleAndInvisibleRepeatPasswordState ? 'text' : 'password'}
            placeholder="Повторите пароль"
            {...register('repeatPassword', {
               required: 'Это обязательное поле',
               validate: (password) => {
                  if (watch('password') !== password) {
                     return 'Пароли не совпадают'
                  }
               },
            })}
            helperText={errors.repeatPassword?.message}
            error={Boolean(errors.repeatPassword)}
            InputProps={{
               endAdornment: visibleAndInvisibleRepeatPasswordState ? (
                  <EyeOpen
                     style={{ cursor: 'pointer' }}
                     onClick={changeRepeatVisibleInvisibleStateHandler}
                  />
               ) : (
                  <EyeClose
                     style={{ cursor: 'pointer' }}
                     onClick={changeRepeatVisibleInvisibleStateHandler}
                  />
               ),
            }}
         />
         <Button
            style={{ marginTop: '0.5rem' }}
            variant="primary"
            onClick={handleSubmit(onSubmit)}
         >
            Подтвердить
         </Button>
      </ResetPasswordForm>
   )
}

const ResetPasswordForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '30.125rem',
   margin: '0 auto',
})

const FormTitleAndCloseIcon = styled(Box)({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '1rem',
})

const FormTitle = styled(Typography)({
   fontWeight: '500',
   fontSize: '24px',
})
