import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CloseModalIcon } from '../assets'
import { forgotPasswordQuery } from '../store/auth/authThunk'
import { forgotPasswordValidationSchema } from '../utils/helpers/forgot-password-validation'
import { Button } from './UI/Button'
import { Input } from './UI/input/Input'
import { Modal } from './Modal'

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
   const dispatch = useDispatch()

   const [isForgotPasswordModalOpen, setForgotPasswordModalOpen] =
      useState(true)

   const closeModalHandler = () => {
      navigate('/main-page')
      setForgotPasswordModalOpen(false)
   }

   const onSubmit = (userData) => {
      dispatch(forgotPasswordQuery(userData.email))
      setValue('email')
   }

   const goBackToPreviousPageHandler = () => {
      navigate(-1)
   }

   return (
      <Modal isOpen={isForgotPasswordModalOpen} handleClose={closeModalHandler}>
         <MainContainer component="div">
            <ForgotPasswordForm
               onSubmit={handleSubmit(onSubmit)}
               component="form"
            >
               <FormTitleAndCloseIcon>
                  <FormTitle variant="h4">Забыли пароль?</FormTitle>
                  <StyledCloseModalIcon onClick={closeModalHandler} />
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
               <Button type="submit" variant="primary">
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
      </Modal>
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
