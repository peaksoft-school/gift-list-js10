import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Typography, styled } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { CloseModalIcon } from '../assets'
import { Input } from './UI/input/Input'
import { Button } from './UI/Button'
import { forgotPasswordValidationSchema } from '../utils/helpers/forgot-password-validation'

export const ForgotPassword = () => {
   const {
      handleSubmit,
      register,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(forgotPasswordValidationSchema),
   })

   const navigate = useNavigate()
   const [isButtonClickedState, setIsButtonClickedState] = useState('')

   const isButtonClickedStateChangeHandler = () => {
      setIsButtonClickedState((prevState) => !prevState)
   }

   const onSubmit = (userData) => {
      localStorage.setItem('email', userData.email)
      setValue('email')
      isButtonClickedStateChangeHandler()
   }

   const goBackToPreviousPageHandler = () => {
      navigate(-1)
   }

   useEffect(() => {
      const storedEmail = localStorage.getItem('email')
      if (storedEmail) {
         setValue('email', storedEmail)
      }
   }, [setValue])

   return (
      <MainContainer component="div">
         <ForgotPasswordForm onSubmit={handleSubmit(onSubmit)} component="form">
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
            <Button
               type="submit"
               variant="primary"
               disabled={isButtonClickedState}
            >
               Отправить
            </Button>
            <CancelButton
               onClick={goBackToPreviousPageHandler}
               variant="outlined"
            >
               Отмена
            </CancelButton>
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
