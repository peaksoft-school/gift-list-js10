import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography, styled } from '@mui/material'
import { CloseModalIcon } from '../assets'
import { Input } from './UI/input/Input'
import { Button } from './UI/Button'
import { schema } from '../utils/helpers/update-profile'

export const ForgotPassword = () => {
   const {
      handleSubmit,
      register,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(schema),
   })

   const onSubmit = () => {}

   return (
      <MainContainer component="div">
         <ForgotPasswordForm component="form">
            <FormTitleAndCloseIcon>
               <FormTitle variant="h4">Забыли пароль?</FormTitle>
               <StyledCloseModalIcon />
            </FormTitleAndCloseIcon>
            <ResetPasswordText variant="p">
               Вам будет отправлена ссылка для сброса пароля
            </ResetPasswordText>
            <Input
               type="email"
               placeholder="Введите ваш Email"
               {...register('email')}
               helperText={errors.email?.message}
               error={Boolean(errors.email)}
            />
            <Button onClick={handleSubmit(onSubmit)} variant="primary">
               Отправить
            </Button>
            <CancelButton variant="outlined">Отмена</CancelButton>
         </ForgotPasswordForm>
      </MainContainer>
   )
}

const MainContainer = styled(Box)({
   display: 'flex',
   justifyContent: 'center',
})

const ForgotPasswordForm = styled(Box)({
   display: 'flex',
   flexDirection: 'column',
   gap: '1rem',
   width: '30.125rem',
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

const ResetPasswordText = styled(Typography)({
   fontSize: '0.875rem',
   color: '#87898E',
   marginBottom: '0.8rem',
})

const StyledCloseModalIcon = styled(CloseModalIcon)({
   cursor: 'pointer',
})

const CancelButton = styled(Button)({
   backgroundColor: 'white',
   border: 'none',
   marginTop: '0.5rem',
   ':hover': {
      border: 'none',
   },
})
