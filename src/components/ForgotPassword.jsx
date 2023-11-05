import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Typography, styled } from '@mui/material'
import { CloseModalIcon } from '../assets'
import { Input } from './UI/input/Input'
import { Button } from './UI/Button'

export const ForgotPassword = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm()

   const onSubmit = () => {}

   return (
      <ForgotPasswordForm component="form">
         <FormTitleAndCloseIcon>
            <FormTitle variant="h4">Забыли пароль?</FormTitle>
            <CloseModalIcon style={{ cursor: 'pointer' }} />
         </FormTitleAndCloseIcon>
         <ResetPasswordText variant="p">
            Вам будет отправлена ссылка для сброса пароля
         </ResetPasswordText>
         <Input
            type="email"
            placeholder="Введите ваш Email"
            {...register('email', {
               required: 'Это обзятельное поле',
            })}
            helperText={errors.email?.message}
            error={Boolean(errors.email)}
         />
         <Button onClick={handleSubmit(onSubmit)} variant="primary">
            Отправить
         </Button>
         <CancelButton variant="outlined">Отмена</CancelButton>
      </ForgotPasswordForm>
   )
}

const ForgotPasswordForm = styled(Box)({
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

const ResetPasswordText = styled(Typography)({
   fontSize: '0.875rem',
   color: '#87898E',
   marginBottom: '0.8rem',
})

const CancelButton = styled(Button)({
   backgroundColor: 'white',
   border: 'none',
   marginTop: '0.5rem',
   ':hover': {
      border: 'none',
   },
})
